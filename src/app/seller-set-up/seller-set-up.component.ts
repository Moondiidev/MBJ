import { AppManagerService } from './../shared/app-manager.service';
import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { SellerSetUpService } from './seller-set-up.service';
import { Subscription, throwError, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { PersonalModel } from 'src/app/shared/personal.model';
import { ProfessionalModel } from '../shared/professional.model';
import { Location } from '@angular/common';
import { skillsInterface } from './skills.interface';
import { educationsInterface } from './educations.interface';
import { certificationsInterface } from './certifications.interface';
@Component({
  selector: 'app-seller-set-up',
  templateUrl: './seller-set-up.component.html',
  styleUrls: ['./seller-set-up.component.scss']
})
export class SellerSetUpComponent implements OnInit, OnDestroy {
  navNum: number = null;
  personalFormValid: boolean = false;
  showSavedPersonalAnim: boolean = false;
  savedPersonalSub: Subscription;
  notLoading: boolean = false;
  personalChangesOccured: boolean = false;
  personalFormValidSub: Subscription;
  mainUrlName: string = 'seller-set-up/';
  firstNavUrlName: string = 'personal';
  secondNavUrlName: string = 'professional';
  constructor(private sellerService: SellerSetUpService, private route: ActivatedRoute, private appManagerService: AppManagerService, private afStorage: AngularFireStorage, private renderer: Renderer2, private location: Location) { }

  ngOnInit(): void {
    this.personalFormValidSub = this.sellerService.personalFormValid.subscribe(validity => {
      this.personalFormValid = validity;
    })

  }
  ngAfterViewInit(): void {
    this.sellerService.fetchValidityInfo().pipe(
      catchError(() => {
        alert('bru');
        this.init();
        return throwError('failed to get validity info from firebase database');
      })
    ).subscribe(data => {
      console.log(data);
      //Only after checking if forms are valid, decide which form to set up
      if (data != null || data != undefined) {
        const validityInfo = data;
        this.personalFormValid = validityInfo.validity.personalFormValid;
      }
      this.init();
    })
  }
  init() {
    //Depending on the url (which reflects the NAV name) that the user was last using, correct NAV is loaded and presented on webpage reload/load
    setTimeout(() => {
      switch (this.route.snapshot.params['nav']) {
        case this.firstNavUrlName:
          this.setUpPersonalForm();
          break;
        case this.secondNavUrlName:
          if (this.personalFormValid) {
            this.setUpProfessionalForm();
          } else {
            this.setUpPersonalForm();
          }
          break;
        default:
          this.setUpPersonalForm();
          break;
      }
    }, 0)
  }
  onNavigation() {
    //If navigate to another form while the current form is loading, stop the loading
    if (!this.notLoading) {
      this.finishLoading();
    }
  }
  personalNav() {
    //If user clicks save and immediately moves to next form without letting the anim playout, it gets played once user returns
    //To the personal form. This fixes the issue.
    this.showSavedPersonalAnim = false;
    this.setUpPersonalForm();
    this.professionalFormOnDestroy();
  }
  setUpPersonalForm() {
    //Adjust html to personal form
    this.navNum = 0;
    this.onNavigation();

    //Change url to personalInfo without causing anything. 
    this.location.go(this.mainUrlName + this.firstNavUrlName);

    //Only need to run once like as if it was a seperate component with NgOnInit
    if (this.personalNavOnce) {
      //PERSONAL FORM
      this.startLoading();
      this.savedPersonalSub = this.sellerService.savedPersonalInfo.subscribe(res => {
        //Show saved pink animation after finished saving
        this.showSavedPersonalAnim = res;
      })
      //NgOnInit gets called only once. This variable is used to simulate that.
      this.personalNavOnce = false;
      //Create form
      this.personalForm = new FormGroup({
        'name': new FormGroup({
          'firstName': new FormControl(null, Validators.required),
          'lastName': new FormControl(null, Validators.required)
        }),
        'description': new FormControl(null, Validators.required)
      });
      //Get data
      this.personalDataSub = this.getAllPersonalData().pipe(
        catchError(() => {
          this.initializePersonalForm();
          return throwError("Couldn't retrieve personal information from firebase");
        }))
        .subscribe(([imgURL, data]: [string, PersonalModel]) => {
          //Get profile img
          this.url = imgURL;
          //Get form data
          console.log(data);
          if (data != null || data != undefined) {
            this.personalData = {
              firstname: data.firstname,
              lastname: data.lastname,
              personalDescription: data.personalDescription,
            };
            this.usePersonalData();
          }
          this.initializePersonalForm();
        });
    }
  }
  initializePersonalForm() {
    //Check if form is valid
    this.subFirstFormValidation();
    //Stop loading
    this.finishLoading();
  }
  getAllPersonalData() {
    //Waits for both observables and returns combined result and error.
    return forkJoin([this.getProfileImage(), this.getPersonalFormData()]);
  }
  getPersonalFormData() {
    //Get data from firebase database
    return this.sellerService.fetchPersonalInfo().pipe(
      catchError(() => {
        return throwError("Couldn't retrieve personal text data from firebase database");
      })
    )
  }
  checkFirstFormValidation() {
    // Seller-set-up header navigation only allows navigation when form is valid
    if (this.personalForm.status === "VALID" && this.url !== null) {
      this.sellerService.personalFormValid.next(true);
    } else {
      this.sellerService.personalFormValid.next(false);
    }
  }

  subFirstFormValidation() {
    this.personalForm.statusChanges.subscribe(() => {
      this.checkFirstFormValidation();
    });
  }
  startLoading() {
    this.notLoading = false;
  }
  finishLoading() {
    this.notLoading = true;
  }
  // ****************************************************************************************** //
  // ************************************ PERSONAL FORM *********************************** //
  // ****************************************************************************************** //
  selectedImage = null;
  url = null;
  personalForm: FormGroup;
  ref;
  task;
  uploadProgress;
  progressValue: number;
  hideProgress: boolean = true;
  personalData: PersonalModel;
  personalDataSub: Subscription;
  personalNavOnce: boolean = true;

  savePersonalData(btn?) {
    this.sellerService.savePersonalInfo(this.personalForm.get('name.firstName').value, this.personalForm.get('name.lastName').value, this.personalForm.get('description').value, btn);
    this.sellerService.saveValidityInfo(this.personalFormValid);
    this.personalChangesOccured = false;
  }
  onPersonalChange() {
    this.sellerService.savedPersonalInfo.next(false);
    this.personalChangesOccured = true;
  }
  usePersonalData() {
    if (this.personalData !== null) {
      if (this.personalData.firstname !== undefined) {
        this.personalForm.get('name.firstName').setValue(this.personalData.firstname);
      }
      if (this.personalData.lastname !== undefined) {
        this.personalForm.get('name.lastName').setValue(this.personalData.lastname);
      }
      if (this.personalData.personalDescription !== undefined) {
        this.personalForm.get('description').setValue(this.personalData.personalDescription);
      }
    }
  }
  getProfileImage() {
    return this.sellerService.getProfileImg().pipe(
      catchError(() => {
        return throwError('profile image was not retrieved from firebase storage');
      })
    )
  }
  professionalNav() {
    this.savePersonalData();
    this.setUpProfessionalForm();
    this.personalFormOnDestroy();
  }
  setUpProfessionalForm() {
    //PROFESSIONAL FORM

    //Change DOM
    this.navNum = 1;
    this.onNavigation();

    //Change url name only
    this.location.go(this.mainUrlName + this.secondNavUrlName);
    //Set up form
    if (this.professionalNavOnce) {

      this.startLoading();
      this.professionalNavOnce = false;
      this.skillsForm = new FormGroup({
        'skillName': new FormControl(null, Validators.required),
        'skillLevel': new FormControl(0, Validators.required)
      })
      this.educationsForm = new FormGroup({
        'universityName': new FormControl(null, Validators.required),
        'major': new FormControl(null, Validators.required),
        'country': new FormControl(0, Validators.required),
        'title': new FormControl(0, Validators.required),
        'graduationYear': new FormControl(0, Validators.required)
      })
      this.certificationsForm = new FormGroup({
        'certificateName': new FormControl(null, Validators.required),
        'certificateGiver': new FormControl(null, Validators.required),
        'certificateYear': new FormControl(0, Validators.required)
      })
      this.professionalForm = new FormGroup({});
      this.fillFromYears();
      this.initializeMiniForms();
      //Get data
      this.professionalDataSub = this.sellerService.fetchProfessionalInfo().pipe(
        catchError(() => {
          //Stop loading
          this.finishLoading();
          return throwError("Couldn't retrieve professional information from firebase database");
        })
      ).subscribe((data: ProfessionalModel) => {
        console.log(data);
        //Check data
        if (data != null || data != undefined) {
          this.professionalData = data;
        }
        this.finishLoading();
        //Use data
        if (this.professionalData != null || this.professionalData != undefined) {
          //This small delay allows useProfessionalData func to access DOM elements after finishLoading
          setTimeout(() => this.useProfessionalData(), 10);
        }
      });
      //These are used to get each separate table elements when user navigates and professional form comes
      //into existance
      this.scrollSub = this.scrollEls.changes.subscribe((el: QueryList<ElementRef>) => {
        this.scrollEl = el.first;
      })
      this.skillsTableSub = this.skillsTableHtmls.changes.subscribe((el: QueryList<ElementRef>) => {
        this.skillsTableHtml = el.first;
      })
      this.educationsTableSub = this.educationsTableHtmls.changes.subscribe((el: QueryList<ElementRef>) => {
        this.educationsTableHtml = el.first;
      })
      this.certificationsTableSub = this.certificationsTableHtmls.changes.subscribe((el: QueryList<ElementRef>) => {
        this.certificationsTableHtml = el.first;
      })
    } else {
      //NgIf messes with the form parts so I need to check checkboxes, repopulate tables and reset some variables whenever ngIf becomes true for professionalNav
      setTimeout(() => {
        this.skillCounter = 0;
        this.skillContent = [];
        this.educationCounter = 0;
        this.educationContent = [];
        this.certificationCounter = 0;
        this.certificationContent = [];
        this.checkCheckBoxes();
        this.populateSkillsTable();
        this.populateEducationsTable();
        this.populateCertificationsTable();
      }, 100);
    }
  }
  initializeMiniForms() {
    this.checkedProfessions = [];

    this.showMiniForm(0);
    this.skills = {
      data: [],
      sorter: []
    }
    this.showMiniForm(1);
    this.educations = {
      data: [],
      sorter: []
    }
    this.showMiniForm(2);
    this.certifications = {
      data: [],
      sorter: []
    }
  }
  onPersonalFormSubmit() {
    if (this.personalForm.valid) {
      this.professionalNav();
    }
  }
  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    //Call these only when new file is selected and not when user cancels file upload.
    if (this.selectedImage !== undefined) {
      //Show progress bar
      this.hideProgress = false;

      //FIREBASE UPLOAD
      this.ref = this.afStorage.ref(`${this.sellerService.folderName}/${this.appManagerService.userName.value}`);
      this.task = this.ref.put(this.selectedImage);
      this.uploadProgress = this.task.percentageChanges();
      this.uploadProgress.subscribe(progress => {
        this.progressValue = progress;
        if (this.progressValue === 100) {
          //Hide progress
          this.hideProgress = true;
          //CHANGE PROFILE IMAGE PREVIEW
          const reader = new FileReader();
          reader.readAsDataURL(this.selectedImage);
          reader.onload = (event => {
            this.url = event.target.result;
            //Changing profile img is also considered as changing form so validity is checked
            this.checkFirstFormValidation();
            this.savePersonalData();
          })
        }
      })
    }
  }
  // ****************************************************************************************** //
  // ************************************ PROFESSIONAL FORM *********************************** //
  // ****************************************************************************************** //
  professionalForm: FormGroup;
  professionalData: ProfessionalModel;
  professionalDataSub = new Subscription();
  closeDropdown = false;
  professions = ['График Дизайн', 'Онлайн Mаркетинг', 'Дуу & Ая', 'Бичиг & Орчуулагa', 'Видео & Аниматион', 'Программ & Технологи', 'Бусад'];
  fromYears = [];
  toYears = [];

  graphicDesignNames: Array<string> = ['Хүүхэлдэйн Кино & Комик Сэтгүүл', '3Д Модель Дүр & Бүдээгтхүүн Дизайн', 'Вэб Дизайн', 'Урилга & Бизнес Карт', 'Тоглоом Дизайн', 'Хүрээлэн Буй Орчин', 'Зар Суртчилгаа', 'Photoshop Эвлүүлэг', 'Лого Дизайн', 'Ном & Цомог Хавтас', 'Инфограпик', 'Архитектур', 'Бусад'];
  marketingNames: Array<string> = ['Эмэйл Маркетинг', 'Вэб Сайт Хөдөлгөөн Ихэсгэх', 'Инфлүнсэр Маркетинг', 'Видео Маркетинг', 'SEO', 'Сошиал Мэдиа Маркетинг', 'Бусад'];
  soundNames: Array<string> = ['Хөгжим Найруулагч & Зохиолч', 'SFX', 'Дуу Оруулаг', 'Дуучин', 'Бусад'];
  writingNames: Array<string> = ['Сэтгүүл & Блог', 'Хяналтын Уншилт & Засах', 'Гадааг Хэл Орчуулагa', 'Хууль Бичвэр', 'Техникийн Бичвэр', 'Бүтээгдэхүүн Тайлбар', 'Уран Бичвэр', 'Товч Намтар (CV)', 'Бусад'];
  videoNames: Array<string> = ['Киноны Трейлер', 'Видео Тоглоомны Трейлер', 'Видео Эвлүүлэг', 'Богино Хэмжээний Зар Сурталчилгаа', '3Д Хүүхэлдэйн Кино', 'VFX', '2Д Хүүхэлдэйн Кино', 'Бусад'];
  programmingNames: Array<string> = ['Вэб Сайт Програмчлал', 'Хөөрөлдөгч Бот', 'Видео Тоглоом Хөгжүүлэх', 'Гар Утасны АПП Програмчлал', 'WordPress', 'Мэдээлэл Судлал & Тайлан', 'Цахим Аюулгуй Байдал', 'Бусад'];
  otherNames: Array<string> = ['Дасгал & Хоол Тэжээл Зөвлөгөө', 'Санхүүгийн Зөвлөгөө', 'Сэтгэл Зүйн Эмчилгээ', 'Бусад'];

  scrollSub: Subscription;
  skillsTableSub: Subscription;
  educationsTableSub: Subscription;
  certificationsTableSub: Subscription;


  //checkedProfessions is used to initiliaze checked elements with class is-checked in html
  checkedProfessions: {
    id: string,
    name: string
  }[];


  currentYear = new Date().getFullYear();
  howManyYears = 50;
  professionText = "График Дизайн";
  fromYearText = "Жил";
  toYearText = "Жил";
  selectedToYear: number;
  selectedFromYear: number;
  //Default is graphic design
  selectedProfession: string = "График Дизайн";
  counter: number = 0;
  professionalNavOnce: boolean = true;

  @ViewChildren('scrollEl') scrollEls: QueryList<ElementRef>;
  @ViewChildren('skillsTable') skillsTableHtmls: QueryList<ElementRef>;
  @ViewChildren('educationsTable') educationsTableHtmls: QueryList<ElementRef>;
  @ViewChildren('certificationsTable') certificationsTableHtmls: QueryList<ElementRef>;

  scrollEl: ElementRef;
  skillsTableHtml: ElementRef;
  educationsTableHtml: ElementRef;
  certificationsTableHtml: ElementRef;

  // *********************************************** //
  // **************** MINIFORMS DATA *************** //
  // *********************************************** //

  skillsForm: FormGroup;
  educationsForm: FormGroup;
  certificationsForm: FormGroup;

  miniFormsEmpty: Array<boolean> = [true, true, true];
  miniFormsShow: Array<boolean> = [false, false, false];
  miniFormEditing: Array<boolean> = [false, false, false];


  skills: skillsInterface;
  skillIndex: number = 0;
  skillTracker: number = 0;
  //Each added el will have unique increasing number whenever new el is added
  skillCounter: number = 0;
  //Stores added <tr> element references to later use them to remove correct child from DOM.
  skillContent = [];


  educations: educationsInterface;
  educationIndex: number = 0;
  educationTracker: number = 0;
  educationCounter: number = 0;
  educationContent = [];


  certifications: certificationsInterface;
  certificationIndex: number = 0;
  certificationTracker: number = 0;
  certificationCounter: number = 0;
  certificationContent = [];

  // *********************************************** //
  // *********************************************** //
  // *********************************************** //

  onSelectProfession(profession: string) {
    this.professionText = profession;
    this.selectedProfession = profession;
    //When new profession category is selected, remove all checks
    this.checkedProfessions = [];
    this.saveProfessionalData();
  }
  onSelectFromYear(fromYear: number, index: number) {
    this.fromYearText = fromYear.toString();
    this.fillToYears(fromYear, index);
    this.selectedFromYear = fromYear;
    // Can't work negative years
    if (fromYear > this.selectedToYear) {
      this.toYearText = "Жил";
    }
    this.saveProfessionalData();
  }
  onSelectToYear(toYear: number) {
    this.toYearText = toYear.toString();
    this.selectedToYear = toYear;
    this.saveProfessionalData();
  }
  fillFromYears() {
    for (let i = 0; i <= this.howManyYears; i++) {
      let tempYear = this.currentYear - i;
      this.fromYears.push(tempYear);
    }
  }
  fillToYears(fromYear: number, index: number) {
    this.toYears = [];
    // 2020 (index = 0) year to 2020 works. 
    if (index === 0) { index = 1 };
    const newYears = this.fromYears.slice(0, index);
    this.toYears.push(...newYears);
  }
  checkedState(event) {
    let chosenEl: HTMLInputElement = event.target;
    if (chosenEl.className.includes('isChecked')) {
      if (this.counter > 0) {
        this.counter--;
        chosenEl.classList.remove('isChecked');
        let a = this.checkedProfessions.findIndex(el => el.id === chosenEl.id);
        this.checkedProfessions.splice(a, 1);
        this.saveProfessionalData();
      }
    } else {
      if (this.counter < 5) {
        chosenEl.classList.add('isChecked');
        this.checkedProfessions[this.counter] = { id: chosenEl.id, name: chosenEl.value };
        this.counter++;
        this.saveProfessionalData();
      }
    }
  }
  checkCheckBoxes() {
    for (let i = 0; i < this.checkedProfessions.length; i++) {
      const tempEl = document.getElementById(this.checkedProfessions[i].id);
      if (tempEl !== null) {
        tempEl.classList.add('isChecked');
      }
    }
    this.counter = this.checkedProfessions.length;
  }
  // ***************************************************************************** //
  // ****************************** MINIFORMS ************************************ //
  // ***************************************************************************** //

  populateSkillsTable() {
    for (let i = 0; i < this.skills.data.length; i++) {
      this.skillContent.push(document.createElement('tr'));
      this.updateSkillDOM(this.skillCounter);
      this.skillContent[this.skillCounter].setAttribute("data-elCounter", this.skills.sorter[i].toString());

      this.renderer.appendChild(this.skillsTableHtml.nativeElement, this.skillContent[this.skillCounter]);
      this.skills.sorter.sort();
      this.addSkillEditListener(this.skillCounter);
      //Starting from the second el, user will have option to delete (cuz first one is required)
      if (this.skillContent.length > 1) {
        this.addSkillDeleteListener(this.skillCounter);
      }
      this.skillCounter++;
    }
  }
  populateEducationsTable() {
    for (let i = 0; i < this.educations.data.length; i++) {
      this.educationContent.push(document.createElement('tr'));
      this.updateEducationDOM(this.educationCounter);
      this.educationContent[this.educationCounter].setAttribute("data-elCounter", this.educations.sorter[i].toString());

      this.renderer.appendChild(this.educationsTableHtml.nativeElement, this.educationContent[this.educationCounter]);

      this.educations.sorter.sort();

      this.addEducationEditListener(this.educationCounter);
      this.addEducationDeleteListener(this.educationCounter);
      this.educationCounter++;
    }
  }
  populateCertificationsTable() {
    for (let i = 0; i < this.certifications.data.length; i++) {
      this.certificationContent.push(document.createElement('tr'));
      this.updateCertificationDOM(this.certificationCounter);
      this.certificationContent[this.certificationCounter].setAttribute("data-elCounter", this.certifications.sorter[i].toString());

      this.renderer.appendChild(this.certificationsTableHtml.nativeElement, this.certificationContent[this.certificationCounter]);

      this.certifications.sorter.sort();

      this.addCertificationEditListener(this.certificationCounter);
      this.addCertificationDeleteListener(this.certificationCounter);

      this.certificationCounter++;
    }
  }
  showMiniForm(i: number) {
    this.miniFormsShow[i] = true;
  }
  resetMiniForm(i: number) {
    switch (i) {
      case 0:
        this.skillsForm.get('skillName').setValue(null);
        this.skillsForm.get('skillLevel').setValue(0);
        break;
      case 1:
        this.educationsForm.get('universityName').setValue(null);
        this.educationsForm.get('major').setValue(null);
        this.educationsForm.get('country').setValue(0);
        this.educationsForm.get('title').setValue(0);
        this.educationsForm.get('graduationYear').setValue(0);
        break;
      case 2:
        this.certificationsForm.get('certificateName').setValue(null);
        this.certificationsForm.get('certificateGiver').setValue(null);
        this.certificationsForm.get('certificateYear').setValue(0);
        break;
      default:
        return;
    }
  }
  removeMiniForm(i: number) {
    if (this.miniFormEditing[i]) {
      this.miniFormEditing[i] = false;
    }
    if (!this.miniFormsEmpty[i]) {
      this.miniFormsShow[i] = false;
      this.resetMiniForm(i);
    }
  }
  // **********************************************************************//
  // *************************** SKILL MINIFORM ***************************//
  // **********************************************************************//

  addSkill() {
    this.skills.data.push({ name: this.skillsForm.get('skillName').value, experienceLevel: this.skillsForm.get('skillLevel').value });

    this.skillContent.push(document.createElement('tr'));
    this.updateSkillDOM(this.skillCounter);

    //skillId will always increment on new skill addition and 
    //will fill skills.sorter with unique numbers which gets sorted allowing you to know the positions of each element
    let skillId = this.skillCounter + this.skillTracker;
    this.skills.sorter.push(skillId);
    //Added html element needs to be stored in order to allow deletion
    this.skillContent[this.skillCounter].setAttribute("data-elCounter", skillId.toString());
    this.renderer.appendChild(this.skillsTableHtml.nativeElement, this.skillContent[this.skillCounter]);

    this.skills.sorter.sort();

    this.addSkillEditListener(this.skillCounter);
    //Starting from the second el, user will have option to delete (cuz first one is required)
    if (this.skillContent.length > 1) {
      this.addSkillDeleteListener(this.skillCounter);
    }

    if (this.miniFormsEmpty[0]) {
      this.miniFormsEmpty[0] = false;
    }
    this.saveProfessionalData();
    this.skillCounter++;
    this.removeMiniForm(0);
  }
  updateSkillDOM(i: number) {
    //The first skill el doesnt have option to remove cuz skills input is required.
    let trashCanHTML = '';
    if (this.skills.data.length === 1 || i === 0) {
      trashCanHTML = "";
    } else {
      trashCanHTML = `<button type="button" class="edit" id = "deleteSkill${i}" > <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt = "" > </button>`;
    }

    this.skillContent[i].innerHTML =
      `                 
      <td>${this.skills.data[i].name}</td>
      <td>${this.skills.data[i].experienceLevel}</td>
      <td>
        <div class="editBtns">
          <button type="button" class="edit" id="editSkill${i}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
          ${trashCanHTML}
        </div>
      </td>
    `
  }
  editSkill(id: number) {
    this.skills.data[id].name = this.skillsForm.get('skillName').value;
    this.skills.data[id].experienceLevel = this.skillsForm.get('skillLevel').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.skillCounter--
    this.updateSkillDOM(id);
    this.skillCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addSkillEditListener(id);
    if (id > 0) {
      this.addSkillDeleteListener(id);
    }
    this.saveProfessionalData();
    this.removeMiniForm(0);
  }
  addSkillEditListener(i: number) {
    document.getElementById(`editSkill${i}`).addEventListener("click", (event) => {
      let elId: number = parseInt((<HTMLElement>(<HTMLElement>event.target).parentNode.parentNode.parentNode.parentNode).getAttribute('data-elCounter'));
      this.skillIndex = this.skills.sorter.indexOf(elId);
      this.showSkillEditorForm.call(this, this.skillIndex);
    });
  }
  addSkillDeleteListener(i: number) {
    document.getElementById(`deleteSkill${i}`).addEventListener("click", (event) => {
      let elId: number = parseInt((<HTMLElement>(<HTMLElement>event.target).parentNode.parentNode.parentNode.parentNode).getAttribute('data-elCounter'));
      this.skillIndex = this.skills.sorter.indexOf(elId);
      this.removeSkillRow.call(this, this.skillIndex);
    });
  }
  showSkillEditorForm(id: number) {
    this.skillsForm.get('skillName').setValue(this.skills.data[id].name);
    this.skillsForm.get('skillLevel').setValue(this.skills.data[id].experienceLevel);
    this.miniFormEditing[0] = true;
    this.showMiniForm(0);
  }

  removeSkillRow(id: number) {
    this.skillCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.skills.data.length - 1;
    if (id < temp) {
      this.skillTracker++;
    }
    this.renderer.removeChild(this.skillsTableHtml.nativeElement, this.skillContent[id]);
    this.skills.sorter.splice(id, 1);
    this.skills.data.splice(id, 1);
    this.skillContent.splice(id, 1);
    if (this.skills.data.length <= 0) {
      this.miniFormsEmpty[0] = true;
      this.showMiniForm(0);
    }
    this.saveProfessionalData();
  }

  // *********************************************************************//
  // ************************ EDUCATION MINIFORM *************************//
  // *********************************************************************//

  addEducation() {
    this.educations.data.push({ universityName: this.educationsForm.get('universityName').value, major: this.educationsForm.get('major').value, country: this.educationsForm.get('country').value, title: this.educationsForm.get('title').value, graduationYear: this.educationsForm.get('graduationYear').value });
    this.educationContent.push(document.createElement('tr'));
    this.updateEducationDOM(this.educationCounter);
    let educationId = this.educationCounter + this.educationTracker;
    this.educations.sorter.push(educationId);
    this.educationContent[this.educationCounter].setAttribute("data-elCounter", educationId);
    this.renderer.appendChild(this.educationsTableHtml.nativeElement, this.educationContent[this.educationCounter]);

    this.educations.sorter.sort();
    this.addEducationEditListener(this.educationCounter);
    this.addEducationDeleteListener(this.educationCounter);
    if (this.miniFormsEmpty[1]) {
      this.miniFormsEmpty[1] = false;
    }
    this.saveProfessionalData();
    this.educationCounter++;
    this.removeMiniForm(1);
  }
  updateEducationDOM(i: number) {
    this.educationContent[i].innerHTML =
      `                 
    <td>${this.educations.data[i].major}</td>
    <td>${this.educations.data[i].graduationYear}</td>
    <td>
      <div class="editBtns">
        <button type="button" class="edit" id="editEducation${i}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
        <button type="button" class="edit" id="deleteEducation${i}"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
      </div>
    </td>
  `;
  }
  editEducation(id: number) {
    this.educations.data[id].universityName = this.educationsForm.get('universityName').value;
    this.educations.data[id].major = this.educationsForm.get('major').value;
    this.educations.data[id].country = this.educationsForm.get('country').value;
    this.educations.data[id].title = this.educationsForm.get('title').value;
    this.educations.data[id].graduationYear = this.educationsForm.get('graduationYear').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.educationCounter--
    this.updateEducationDOM(id);
    this.educationCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addEducationEditListener(id);
    this.addEducationDeleteListener(id);
    this.saveProfessionalData();
    this.removeMiniForm(1);
  }
  addEducationEditListener(i: number) {
    document.getElementById(`editEducation${i}`).addEventListener("click", (event) => {
      let elId: number = parseInt((<HTMLElement>(<HTMLElement>event.target).parentNode.parentNode.parentNode.parentNode).getAttribute('data-elCounter'));
      this.educationIndex = this.educations.sorter.indexOf(elId);
      this.showEducationEditorForm.call(this, this.educationIndex);
    });
  }
  addEducationDeleteListener(i: number) {
    document.getElementById(`deleteEducation${i}`).addEventListener("click", (event) => {
      let elId: number = parseInt((<HTMLElement>(<HTMLElement>event.target).parentNode.parentNode.parentNode.parentNode).getAttribute('data-elCounter'));
      this.educationIndex = this.educations.sorter.indexOf(elId);
      this.removeEducationRow.call(this, this.educationIndex);
    });
  }

  showEducationEditorForm(id: number) {
    this.educationsForm.get('universityName').setValue(this.educations.data[id].universityName);
    this.educationsForm.get('major').setValue(this.educations.data[id].major);
    this.educationsForm.get('country').setValue(this.educations.data[id].country);
    this.educationsForm.get('title').setValue(this.educations.data[id].title);
    this.educationsForm.get('graduationYear').setValue(this.educations.data[id].graduationYear);
    this.miniFormEditing[1] = true;
    this.showMiniForm(1);
  }
  removeEducationRow(id: number) {
    this.educationCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.educations.data.length - 1;
    if (id < temp) {
      this.educationTracker++;
    }
    this.renderer.removeChild(this.educationsTableHtml.nativeElement, this.educationContent[id]);
    this.educations.sorter.splice(id, 1);
    this.educations.data.splice(id, 1);
    this.educationContent.splice(id, 1);
    if (this.educationContent.length <= 0) {
      this.miniFormsEmpty[1] = true;
      this.showMiniForm(1);
    }
    this.saveProfessionalData();
  }
 
  // *************************************************************************//
  // ************************ CERTIFICATION MINIFORM *************************//
  // *************************************************************************//

  addCertification() {
    // Only push when everything is filled. (imitating required but not using it cuz it is not a required input field)
    this.certifications.data.push({ name: this.certificationsForm.get('certificateName').value, giver: this.certificationsForm.get('certificateGiver').value, year: this.certificationsForm.get('certificateYear').value });
    this.certificationContent.push(document.createElement('tr'));
    this.updateCertificationDOM(this.certificationCounter);

    let certificationId = this.certificationCounter + this.certificationTracker;
    this.certifications.sorter.push(certificationId);
    this.certificationContent[this.certificationCounter].setAttribute("data-elCounter", certificationId);
    this.renderer.appendChild(this.certificationsTableHtml.nativeElement, this.certificationContent[this.certificationCounter]);

    this.certifications.sorter.sort();

    this.addCertificationEditListener(this.certificationCounter)
    this.addCertificationDeleteListener(this.certificationCounter);

    if (this.miniFormsEmpty[2]) {
      this.miniFormsEmpty[2] = false;
    }
    this.saveProfessionalData();
    this.certificationCounter++;
    this.removeMiniForm(2);
  }
  updateCertificationDOM(i: number) {
    this.certificationContent[i].innerHTML = `                 
    <td>${this.certifications.data[i].name}</td>
    <td>${this.certifications.data[i].year}</td>
    <td>
      <div class="editBtns">
        <button type="button" class="edit" id="editCertification${i}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
        <button type="button" class="edit" id="deleteCertification${i}"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
      </div>
    </td>
  `;
  }
  editCertification(id: number) {
    this.certifications.data[id].name = this.certificationsForm.get('certificateName').value;
    this.certifications.data[id].giver = this.certificationsForm.get('certificateGiver').value;
    this.certifications.data[id].year = this.certificationsForm.get('certificateYear').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.certificationCounter--
    this.updateCertificationDOM(id);
    this.certificationCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addCertificationEditListener(id)
    this.addCertificationDeleteListener(id);
    this.removeMiniForm(2);
    this.saveProfessionalData();
  }
  addCertificationEditListener(i: number) {
    document.getElementById(`editCertification${i}`).addEventListener("click", (event) => {
      let elId: number = parseInt((<HTMLElement>(<HTMLElement>event.target).parentNode.parentNode.parentNode.parentNode).getAttribute('data-elCounter'));
      this.certificationIndex = this.certifications.sorter.indexOf(elId);
      this.showCertificationEditorForm.call(this, this.certificationIndex);
    });
  }
  addCertificationDeleteListener(i: number) {
    document.getElementById(`deleteCertification${i}`).addEventListener("click", (event) => {
      let elId: number = parseInt((<HTMLElement>(<HTMLElement>event.target).parentNode.parentNode.parentNode.parentNode).getAttribute('data-elCounter'));
      this.certificationIndex = this.certifications.sorter.indexOf(elId);
      this.removeCertificationRow.call(this, this.certificationIndex);
    });
  }
  showCertificationEditorForm(id: number) {
    this.certificationsForm.get('certificateName').setValue(this.certifications.data[id].name);
    this.certificationsForm.get('certificateGiver').setValue(this.certifications.data[id].giver);
    this.certificationsForm.get('certificateYear').setValue(this.certifications.data[id].year);
    this.miniFormEditing[2] = true;
    this.showMiniForm(2);
  }
  removeCertificationRow(id: number) {
    this.certificationCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.certifications.data.length - 1;
    if (id < temp) {
      this.certificationTracker++;
    }
    this.renderer.removeChild(this.certificationsTableHtml.nativeElement, this.certificationContent[id]);
    this.certifications.sorter.splice(id, 1);
    this.certifications.data.splice(id, 1);
    this.certificationContent.splice(id, 1);
    if (this.certificationContent.length <= 0) {
      this.miniFormsEmpty[2] = true;
      this.showMiniForm(2);
    }
    this.saveProfessionalData();
  }
  // ***************************************************************************** //
  // ***************************************************************************** //
  // ***************************************************************************** //

  saveProfessionalData() {
    this.sellerService.saveProfessionalInfo(this.selectedProfession, this.checkedProfessions, this.selectedFromYear, this.selectedToYear, this.skills, this.educations, this.certifications);
  }
  useProfessionalData() {
    if (this.professionalData.profession !== undefined) {
      this.selectedProfession = this.professionalData.profession;
      this.professionText = this.professionalData.profession;
    }
    if (this.professionalData.professionSkills !== undefined) {
      this.checkedProfessions = this.professionalData.professionSkills;
      this.checkCheckBoxes();
    }
    if (this.professionalData.fromYear !== undefined) {
      this.selectedFromYear = this.professionalData.fromYear;
      this.fromYearText = this.professionalData.fromYear.toString();
    }
    if (this.professionalData.toYear !== undefined) {
      this.selectedToYear = this.professionalData.toYear;
      this.toYearText = this.professionalData.toYear.toString();
    }
    if (this.professionalData.skills !== undefined) {
      if (this.professionalData.skills.data !== undefined && this.professionalData.skills.sorter !== undefined) {
        this.skills = {
          data: this.professionalData.skills.data,
          sorter: this.professionalData.skills.sorter
        }
        if (this.miniFormsEmpty[0]) {
          this.miniFormsShow[0] = false;
          this.miniFormsEmpty[0] = false;
        }
        this.populateSkillsTable();
      }
    }
    if (this.professionalData.educations !== undefined) {
      if (this.professionalData.educations.data !== undefined && this.professionalData.educations.sorter !== undefined) {
        this.educations = {
          data: this.professionalData.educations.data,
          sorter: this.professionalData.educations.sorter
        }
        if (this.miniFormsEmpty[1]) {
          this.miniFormsShow[1] = false;
          this.miniFormsEmpty[1] = false;
        }
        this.populateEducationsTable();
      }

    }
    if (this.professionalData.certifications !== undefined) {
      if (this.professionalData.certifications.data !== undefined && this.professionalData.certifications.sorter !== undefined) {
        this.certifications = {
          data: this.professionalData.certifications.data,
          sorter: this.professionalData.certifications.sorter
        }
        if (this.miniFormsEmpty[2]) {
          this.miniFormsShow[2] = false;
          this.miniFormsEmpty[2] = false;
        }
        this.populateCertificationsTable();
      }
    }
  }
  ngOnDestroy() {
    if (this.navNum === 0) {
      this.personalFormValidSub.unsubscribe();
      this.personalFormOnDestroy();
    }
    //These need to be subscribed even when professional Nav is not being used.
    else if (this.navNum === 1) {
      this.scrollSub.unsubscribe();
      this.skillsTableSub.unsubscribe();
      this.educationsTableSub.unsubscribe();
      this.certificationsTableSub.unsubscribe();
      this.professionalFormOnDestroy();
    }
  }
  personalFormOnDestroy() {
    this.personalDataSub.unsubscribe();
  }
  professionalFormOnDestroy() {
    this.professionalDataSub.unsubscribe();
  }

  onProfessionalFormSubmit() {
    if (this.selectedProfession == null || this.selectedFromYear == null || this.selectedToYear == null || this.checkedProfessions.length < 1) {
      window.scrollTo(0, 0);
    } else if (this.miniFormsEmpty[0]) {
      this.scrollEl.nativeElement.scrollIntoView(true);
    } else {
      this.saveProfessionalData();
    }
  }
}



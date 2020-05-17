import { Subscription } from 'rxjs';
import { ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SellerSetUpService } from '../seller-set-up.service';
import { ProfessionalModel } from 'src/app/shared/professional.model';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit, OnDestroy {
  professionalForm: FormGroup;
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

  // graphicIds: Array<number> = [];
  // marketingIds: Array<number> = [];
  // soundIds: Array<number> = [];
  // writingIds: Array<number> = [];
  // videoIds: Array<number> = [];
  // programmingIds: Array<number> = [];
  // otherIds: Array<number> = [];

  checkedProfessions: {
    name: Array<string>,
    //id is used to initiliaze checked elements with class is-checked in html
    id: Array<number>
  }

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

  @ViewChild('scrollEl') scrollEl: ElementRef;
  @ViewChild('skillsTable') skillsTableHtml: ElementRef;
  @ViewChild('educationsTable') educationsTableHtml: ElementRef;
  @ViewChild('certificationsTable') certificationsTableHtml: ElementRef;

  // **************** MINIFORMS *************** //
  educationsEmpty: boolean = true;
  skillsEmpty: boolean = true;
  certificationsEmpty: boolean = true;

  skills: {
    data: Array<{ name: string, experienceLevel: string }>,
    //Used to provide correct index even when elements are removed from the middle and array looks off like [0,3,5], 1st,2nd,4th elements were deleted --> [0,1,2] 
    sorter: Array<number>
  };
  //Stores added <tr> element references to later use them to remove correct child from DOM.
  skillContent: Array<HTMLTableRowElement> = [];
  skillIndex: number = 0;
  skillTracker: number = 0;
  //Each added el will have unique increasing number whenever new el is added
  skillCounter: number = 0;
  skillEditing = false;


  educations: {
    data: Array<{ universityName: string, major: string, country: string, title: string, graduationYear: number }>;
    sorter: Array<number>,
  };

  educationIndex: number = 0;
  educationTracker: number = 0;
  educationCounter: number = 0;
  educationContent = [];
  educationEditing = false;


  certifications: {
    data: Array<{ name: string, giver: string, year: number }>;
    sorter: Array<number>,
  }
  certificationIndex: number = 0;
  certificationTracker: number = 0;
  certificationCounter: number = 0;
  certificationContent = [];
  certificationEditing = false;

  showSkills: boolean = false;
  showEducations: boolean = false;
  showCertifications: boolean = false;
  // **************** MINIFORMS *************** //
  allInfo: ProfessionalModel;
  dataSub = new Subscription();
  constructor(private sellerService: SellerSetUpService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.professionalForm = new FormGroup({
      'skills': new FormGroup({
        'skillName': new FormControl(null),
        'skillLevel': new FormControl(0)
      }),
      'educations': new FormGroup({
        'universityName': new FormControl(null),
        'major': new FormControl(null),
        'country': new FormControl(0),
        'title': new FormControl(0),
        'graduationYear': new FormControl(0)
      }),
      'certifications': new FormGroup({
        'certificateName': new FormControl(null),
        'certificateGiver': new FormControl(null),
        'certificateYear': new FormControl(0)
      })
    });
    this.fillFromYears();

    this.checkedProfessions = {
      name : [],
      id: []
    }
    this.showSkillsForm();
    this.skills = {
      data: [],
      sorter: []
    }
    this.showEducationsForm();
    this.educations = {
      data: [],
      sorter: []
    }
    this.showEducationsForm();
    this.certifications = {
      data: [],
      sorter: []
    }

    this.dataSub = this.sellerService.fetchProfessionalInfo().subscribe((data: ProfessionalModel) => {
      //Get data
      this.allInfo = data;

      //Use data
      if(this.allInfo !== null){
        this.useData();
      }
      //Every few seconds, save the form
      setInterval(() => {
        this.sellerService.saveProfessionalInfo(this.selectedProfession, this.checkedProfessions, this.selectedFromYear, this.selectedToYear, this.skills, this.educations, this.certifications);
      }, 5000);
    });
  }
  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
  useData() {
    if (this.allInfo.profession !== undefined) {
      this.selectedProfession = this.allInfo.profession;
      this.professionText = this.allInfo.profession;
    }
    if (this.allInfo.professionSkills !== undefined) {
      this.checkedProfessions = {
        name : this.allInfo.professionSkills.name,
        id: this.allInfo.professionSkills.id
      }
    }
    if (this.allInfo.fromYear !== undefined) {
      this.selectedFromYear = this.allInfo.fromYear;
      this.fromYearText = this.allInfo.fromYear.toString();
    }
    if (this.allInfo.toYear !== undefined) {
      this.selectedToYear = this.allInfo.toYear;
      this.toYearText = this.allInfo.toYear.toString();
    }
    if (this.allInfo.skills !== undefined) {
      if (this.allInfo.skills.data !== undefined && this.allInfo.skills.sorter !== undefined) {
        this.skills = {
          data: this.allInfo.skills.data,
          sorter: this.allInfo.skills.sorter
        }
        if (this.skillsEmpty) {
          this.showSkills = false;
          this.skillsEmpty = false;
        }
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
    } 
    if (this.allInfo.educations !== undefined) {
      if (this.allInfo.educations.data !== undefined && this.allInfo.educations.sorter !== undefined) {
        this.educations = {
          data: this.allInfo.educations.data,
          sorter: this.allInfo.educations.sorter
        }
        if (this.educationsEmpty) {
          this.showEducations = false;
          this.educationsEmpty = false;
        }
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

    } 
    if (this.allInfo.certifications !== undefined) {
      if (this.allInfo.certifications.data !== undefined && this.allInfo.certifications.sorter !== undefined) {
        this.certifications = {
          data: this.allInfo.certifications.data,
          sorter: this.allInfo.certifications.sorter
        }
        if (this.certificationsEmpty) {
          this.showCertifications = false;
          this.certificationsEmpty = false;
        }
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
    }
  }
  onSelectProfession(profession: string) {
    this.professionText = profession;
    this.selectedProfession = profession;
    //When new profession category is selected, remove all checks
    this.checkedProfessions.id = [];
  }
  onSelectFromYear(fromYear: number, index: number) {
    this.fromYearText = fromYear.toString();
    this.fillToYears(fromYear, index);
    this.selectedFromYear = fromYear;
    // Can't work negative years
    if (fromYear > this.selectedToYear) {
      this.toYearText = "Жил";
    }
  }
  onSelectToYear(toYear: number) {
    this.toYearText = toYear.toString();
    this.selectedToYear = toYear;
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
  checkedState(event, i?) {
    alert(i);
    let el: HTMLElement = event.target;
    if (el.className.includes('isChecked')) {
      el.classList.remove('isChecked');
      console.log(el.className.includes('isChecked'));
    } else {
      if (this.counter < 5) {
        el.classList.add('isChecked');
        this.checkedProfessions[this.counter] = event.target.value;
        let tempElId = parseInt(event.target.id);
        this.checkedProfessions.id[this.counter] = tempElId;
        this.counter++;
      } 
    }
  }
  onSubmit() {
    if (this.selectedProfession == null || this.selectedFromYear == null || this.selectedToYear == null || this.checkedProfessions.name.length == 0) {
      window.scrollTo(0, 0);
    } else if (this.skillsEmpty) {
      this.scrollEl.nativeElement.scrollIntoView(true);
    } else {
      this.sellerService.saveProfessionalInfo(this.selectedProfession, this.checkedProfessions, this.selectedFromYear, this.selectedToYear, this.skills, this.educations, this.certifications);
    }
  }

  // ************************ SKILL MINIFORM *************************
  addSkill() {
    this.skills.data.push({ name: this.professionalForm.get('skills.skillName').value, experienceLevel: this.professionalForm.get('skills.skillLevel').value });

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

    if (this.skillsEmpty) {
      this.skillsEmpty = false;
    }
    this.skillCounter++;
    this.removeSkillsForm();
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
    <tr>
      <td>${this.skills.data[i].name}</td>
      <td>${this.skills.data[i].experienceLevel}</td>
      <td>
        <div class="editBtns">
          <button type="button" class="edit" id="editSkill${i}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
          ${trashCanHTML}
        </div>
      </td>
    </tr>
    `
  }
  editSkill(id: number) {
    this.skills.data[id].name = this.professionalForm.get('skills.skillName').value;
    this.skills.data[id].experienceLevel = this.professionalForm.get('skills.skillLevel').value;

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
    this.removeSkillsForm();
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
    this.professionalForm.get('skills.skillName').setValue(this.skills.data[id].name);
    this.professionalForm.get('skills.skillLevel').setValue(this.skills.data[id].experienceLevel);
    this.skillEditing = true;
    this.showSkillsForm();
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
      this.skillsEmpty = true;
      this.showSkillsForm();
    }
  }

  showSkillsForm() {
    this.showSkills = true;
  }
  removeSkillsForm() {
    if (this.skillEditing) {
      this.skillEditing = false;
    }
    if (!this.skillsEmpty) {
      this.showSkills = false;
      this.resetSkillsForm();
    }
  }
  resetSkillsForm() {
    this.professionalForm.get('skills.skillName').setValue(null);
    this.professionalForm.get('skills.skillLevel').setValue(0);
  }

  // ************************ EDUCATION MINIFORM *************************
  addEducation() {
    if (this.validateEducation()) {
      this.educations.data.push({ universityName: this.professionalForm.get('educations.universityName').value, major: this.professionalForm.get('educations.major').value, country: this.professionalForm.get('educations.country').value, title: this.professionalForm.get('educations.title').value, graduationYear: this.professionalForm.get('educations.graduationYear').value });
      this.educationContent.push(document.createElement('tr'));
      this.updateEducationDOM(this.educationCounter);
      let educationId = this.educationCounter + this.educationTracker;
      this.educations.sorter.push(educationId);
      this.educationContent[this.educationCounter].setAttribute("data-elCounter", educationId);
      this.renderer.appendChild(this.educationsTableHtml.nativeElement, this.educationContent[this.educationCounter]);

      this.educations.sorter.sort();
      this.addEducationEditListener(this.educationCounter);
      this.addEducationDeleteListener(this.educationCounter);
      if (this.educationsEmpty) {
        this.educationsEmpty = false;
      }
      this.educationCounter++;
      this.removeEducationsForm();
    }
  }
  updateEducationDOM(i: number) {
    this.educationContent[i].innerHTML =
      `                 
  <tr>
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
    this.educations.data[id].universityName = this.professionalForm.get('educations.universityName').value;
    this.educations.data[id].major = this.professionalForm.get('educations.major').value;
    this.educations.data[id].country = this.professionalForm.get('educations.country').value;
    this.educations.data[id].title = this.professionalForm.get('educations.title').value;
    this.educations.data[id].graduationYear = this.professionalForm.get('educations.graduationYear').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.educationCounter--
    this.updateEducationDOM(id);
    this.educationCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addEducationEditListener(id);
    this.addEducationDeleteListener(id);
    this.removeEducationsForm();
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
    this.professionalForm.get('educations.universityName').setValue(this.educations.data[id].universityName);
    this.professionalForm.get('educations.major').setValue(this.educations.data[id].major);
    this.professionalForm.get('educations.country').setValue(this.educations.data[id].country);
    this.professionalForm.get('educations.title').setValue(this.educations.data[id].title);
    this.professionalForm.get('educations.graduationYear').setValue(this.educations.data[id].graduationYear);
    this.educationEditing = true;
    this.showEducationsForm();
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
      this.educationsEmpty = true;
      this.showEducationsForm();
    }
  }
  showEducationsForm() {
    this.showEducations = true;
  }
  removeEducationsForm() {
    if (this.educationEditing) {
      this.educationEditing = false;
    }
    if (!this.educationsEmpty) {
      this.showEducations = false;
      this.resetEducationsForm();
    }
  }
  resetEducationsForm() {
    this.professionalForm.get('educations.universityName').setValue(null);
    this.professionalForm.get('educations.major').setValue(null);
    this.professionalForm.get('educations.country').setValue(0);
    this.professionalForm.get('educations.title').setValue(0);
    this.professionalForm.get('educations.graduationYear').setValue(0);
  }
  validateEducation() {
    const valid = this.professionalForm.get('educations.universityName').value != null && this.professionalForm.get('educations.major').value != null && this.professionalForm.get('educations.country').value != 0 && this.professionalForm.get('educations.title').value != 0 && this.professionalForm.get('educations.graduationYear').value != 0;
    return valid;
  }

  // ************************ CERTIFICATION MINIFORM *************************
  addCertification() {
    // Only push when everything is filled. (imitating required but not using it cuz it is not a required input field)
    if (this.validateCertification()) {
      this.certifications.data.push({ name: this.professionalForm.get('certifications.certificateName').value, giver: this.professionalForm.get('certifications.certificateGiver').value, year: this.professionalForm.get('certifications.certificateYear').value });
      this.certificationContent.push(document.createElement('tr'));
      this.updateCertificationDOM(this.certificationCounter);

      let certificationId = this.certificationCounter + this.certificationTracker;
      this.certifications.sorter.push(certificationId);
      this.certificationContent[this.certificationCounter].setAttribute("data-elCounter", certificationId);
      this.renderer.appendChild(this.certificationsTableHtml.nativeElement, this.certificationContent[this.certificationCounter]);

      this.certifications.sorter.sort();

      this.addCertificationEditListener(this.certificationCounter)
      this.addCertificationDeleteListener(this.certificationCounter);

      if (this.certificationsEmpty) {
        this.certificationsEmpty = false;
      }
      this.certificationCounter++;
      this.removeCertificationsForm();
    }
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
    this.certifications.data[id].name = this.professionalForm.get('certifications.certificateName').value;
    this.certifications.data[id].giver = this.professionalForm.get('certifications.certificateGiver').value;
    this.certifications.data[id].year = this.professionalForm.get('certifications.certificateYear').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.certificationCounter--
    this.updateCertificationDOM(id);
    this.certificationCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addCertificationEditListener(id)
    this.addCertificationDeleteListener(id);
    this.removeCertificationsForm();
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
    this.professionalForm.get('certifications.certificateName').setValue(this.certifications.data[id].name);
    this.professionalForm.get('certifications.certificateGiver').setValue(this.certifications.data[id].giver);
    this.professionalForm.get('certifications.certificateYear').setValue(this.certifications.data[id].year);
    this.certificationEditing = true;
    this.showCertificationsForm();
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
      this.certificationsEmpty = true;
      this.showCertificationsForm();
    }
  }
  showCertificationsForm() {
    this.showCertifications = true;
  }
  removeCertificationsForm() {
    if (this.certificationEditing) {
      this.certificationEditing = false;
    }
    if (!this.certificationsEmpty) {
      this.showCertifications = false;
      this.resetCertificationsForm();
    }
  }
  resetCertificationsForm() {
    this.professionalForm.get('certifications.certificateName').setValue(null);
    this.professionalForm.get('certifications.certificateGiver').setValue(null);
    this.professionalForm.get('certifications.certificateYear').setValue(0);
  }
  validateCertification() {
    const valid = this.professionalForm.get('certifications.certificateName').value != null && this.professionalForm.get('certifications.certificateGiver').value != null && this.professionalForm.get('certifications.certificateYear').value != 0;
    return valid;
  }
}

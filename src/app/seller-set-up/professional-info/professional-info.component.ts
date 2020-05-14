import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SellerSetUpService } from '../seller-set-up.service';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {
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

  checkedProfessions: Array<string> = [];
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
  skills: Array<{ name: string, experienceLevel: string }> = [];
  educations: Array<{ universityName: string, major: string, country: string, title: string, graduationYear: number }> = []; certifications: Array<{ name: string, giver: string, year: number }> = [];

  educationsEmpty: boolean = true;
  skillsEmpty: boolean = true;
  certificationsEmpty: boolean = true;

  @ViewChild('scrollEl') scrollEl: ElementRef;
  @ViewChild('skillsTable') skillsTableHtml: ElementRef;
  @ViewChild('educationsTable') educationsTableHtml: ElementRef;
  @ViewChild('certificationsTable') certificationsTableHtml: ElementRef;

  skillCounter: number = 0;
  skillTracker: number = 0;
  skillSorter: Array<number> = [];
  skillContent = [];
  skillEditing = false;
  skillIndex: number = 0;

  educationCounter: number = 0;
  educationSecondCounter: number = 0;
  educationTracker: number = 0;
  educationSorter: Array<number> = [];
  educationContent = [];
  educationDelete = [];
  educationEdit = [];
  educationEditing = false;
  educationIndex: number = 0;

  certificationCounter: number = 0;
  certificationSecondCounter: number = 0;
  certificationTracker: number = 0;
  certificationSorter: Array<number> = [];
  certificationContent = [];
  certificationDelete = [];
  certificationEdit = [];
  certificationEditing = false;
  certificationIndex: number = 0;

  showSkills: boolean = false;
  showEducations: boolean = false;
  showCertifications: boolean = false;
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
    })
    this.fillFromYears();
    //Get data

    // If no items were previously added, Have adder-forms ready and if there are items, have tables ready. 
    this.skills.length === 0 ? this.showSkills = true : this.skillsEmpty = false;
    this.educations.length === 0 ? this.showEducations = true : this.educationsEmpty = false;
    this.certifications.length === 0 ? this.showCertifications = true : this.certificationsEmpty = false;
  }

  onSelectProfession(profession: string) {
    this.professionText = profession;
    this.selectedProfession = profession;
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
  checkedState(event) {
    if (event.target.checked === true) {
      if (this.counter < 5) {
        this.checkedProfessions[this.counter] = event.target.value;
        this.counter++;
      } else {
        event.target.checked = false;
      }
    } else if (this.counter > 0) {
      this.counter--;
    }
  }
  addSkill() {
    if (this.professionalForm.get('skills').valid) {
      this.skills.push({ name: this.professionalForm.get('skills.skillName').value, experienceLevel: this.professionalForm.get('skills.skillLevel').value });

      this.skillContent.push(document.createElement('tr'));
      this.updateSkillDOM(this.skillCounter);

      //skillId will always increment on new skill addition and 
      // will fill skillSorter with unique numbers which gets sorted allowing you to know the positions of each element
      let skillId = this.skillCounter + this.skillTracker;
      this.skillSorter.push(skillId);
      //Added html element needs to be stored in order to allow deletion
      this.skillContent[this.skillCounter].setAttribute("data-elCounter", skillId);
      this.renderer.appendChild(this.skillsTableHtml.nativeElement, this.skillContent[this.skillCounter]);

      this.skillSorter.sort();

      document.getElementById(`editSkill${this.skillCounter}`).addEventListener("click", (event) => {
        let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
        this.skillIndex = this.skillSorter.indexOf(elId);
        this.showSkillEditorForm.call(this, this.skillIndex);
      });

      //Since delete btn is being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
      //Each delete btn needs to have unique id or eventlistener will be applied to same btn many times
      if (this.skills.length > 1) {
        document.getElementById(`deleteSkill${this.skillCounter}`).addEventListener("click", (event) => {
          let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
          this.skillIndex = this.skillSorter.indexOf(elId);
          this.removeSkillRow.call(this, this.skillIndex);
        });
      }

      if (this.skillsEmpty) {
        this.skillsEmpty = false;
      }
      this.skillCounter++;
      this.removeSkillsForm();

    }
  }
  updateSkillDOM(i: number) {
    //The first skill el doesnt have option to remove cuz skills input is required.
    let trashCanHTML = '';
    if (this.skills.length === 1 || i === 0) {
      trashCanHTML = "";
    } else {
      trashCanHTML = `<button type="button" class="edit" id = "deleteSkill${i}" > <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt = "" > </button>`;
    }

    this.skillContent[i].innerHTML =
      `                 
    <tr>
      <td>${this.professionalForm.get('skills.skillName').value}</td>
      <td>${this.professionalForm.get('skills.skillLevel').value}</td>
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
    this.skills[id].name = this.professionalForm.get('skills.skillName').value;
    this.skills[id].experienceLevel = this.professionalForm.get('skills.skillLevel').value;
    this.skillCounter--
    this.updateSkillDOM(id);
    this.skillCounter++;

    //Adding Eventlitsteners
    document.getElementById(`editSkill${id}`).addEventListener("click", (event) => {
      let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
      this.skillIndex = this.skillSorter.indexOf(elId);
      this.showSkillEditorForm.call(this, this.skillIndex);
    });
    //Since delete btn is being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    //Each delete btn needs to have unique id or eventlistener will be applied to same btn many times
    if (id > 0) {
      document.getElementById(`deleteSkill${id}`).addEventListener("click", (event) => {
        let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
        this.skillIndex = this.skillSorter.indexOf(elId);
        this.removeSkillRow.call(this, this.skillIndex);
      });
    }
    this.removeSkillsForm();
  }
  showSkillEditorForm(id: number) {
    this.professionalForm.get('skills.skillName').setValue(this.skills[id].name);
    this.professionalForm.get('skills.skillLevel').setValue(this.skills[id].experienceLevel);
    this.skillEditing = true;
    this.showSkillsForm();
  }

  removeSkillRow(id: number) {
    this.skillCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.skills.length - 1;
    if (id < temp) {
      this.skillTracker++;
    }
    console.log(this.skillsTableHtml.nativeElement);
    console.log(this.skillContent);
    alert(id);
    this.renderer.removeChild(this.skillsTableHtml.nativeElement, this.skillContent[id]);
    this.skillSorter.splice(id, 1);
    this.skills.splice(id, 1);
    this.skillContent.splice(id, 1);
    if (this.skills.length <= 0) {
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
  addEducation() {
    if (this.validateEducation()) {
      this.educations.push({ universityName: this.professionalForm.get('educations.universityName').value, major: this.professionalForm.get('educations.major').value, country: this.professionalForm.get('educations.country').value, title: this.professionalForm.get('educations.title').value, graduationYear: this.professionalForm.get('educations.graduationYear').value });
      this.educationContent.push(document.createElement('tr'));
      this.updateEducationDOM(this.educationCounter);
      //educationId will always increment on new education addition and 
      // will fill educationSorter with unique numbers which gets sorted allowing you to know the positions of each element
      let educationId = this.educationCounter + this.educationTracker;
      this.educationSorter.push(educationId);
      //Added html element needs to be stored in order to allow deletion
      this.educationContent[this.educationCounter].setAttribute("data-elCounter", educationId);
      this.renderer.appendChild(this.educationsTableHtml.nativeElement, this.educationContent[this.educationCounter]);
      //Since delete btn is being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
      //Each delete btn needs to have unique id or eventlistener will be applied to same btn many times
      this.educationDelete.push(document.getElementById(`deleteEducation${this.educationSecondCounter}`));
      this.educationEdit.push(document.getElementById(`editEducation${this.educationSecondCounter}`));
      this.educationSorter.sort();
      this.educationEdit[this.educationCounter].addEventListener("click", (event) => {
        let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
        this.educationIndex = this.educationSorter.indexOf(elId);
        this.showEducationEditorForm.call(this, this.educationIndex);
      });
      this.educationDelete[this.educationCounter].addEventListener("click", (event) => {
        let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
        this.educationIndex = this.educationSorter.indexOf(elId);
        this.removeEducationRow.call(this, this.educationIndex);
      });
      if (this.educationsEmpty) {
        this.educationsEmpty = false;
      }
      this.educationCounter++;
      this.educationSecondCounter++;
      this.removeEducationsForm();
    }
  }
  updateEducationDOM(i: number) {
    this.educationContent[i].innerHTML =
      `                 
  <tr>
    <td>${this.professionalForm.get('educations.major').value}</td>
    <td>${this.professionalForm.get('educations.graduationYear').value}</td>
    <td>
      <div class="editBtns">
        <button type="button" class="edit" id="editEducation${this.educationSecondCounter}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
        <button type="button" class="edit" id="deleteEducation${this.educationSecondCounter}"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
      </div>
    </td>
  `;
  }
  editEducation(id: number) {
    this.educations[id].universityName = this.professionalForm.get('educations.universityName').value;
    this.educations[id].major = this.professionalForm.get('educations.major').value;
    this.educations[id].country = this.professionalForm.get('educations.country').value;
    this.educations[id].title = this.professionalForm.get('educations.title').value;
    this.educations[id].graduationYear = this.professionalForm.get('educations.graduationYear').value;
    this.updateEducationDOM(id);
    this.removeEducationsForm();
  }
  showEducationEditorForm(id: number) {
    this.professionalForm.get('educations.universityName').setValue(this.educations[id].universityName);
    this.professionalForm.get('educations.major').setValue(this.educations[id].major);
    this.professionalForm.get('educations.country').setValue(this.educations[id].country);
    this.professionalForm.get('educations.title').setValue(this.educations[id].title);
    this.professionalForm.get('educations.graduationYear').setValue(this.educations[id].graduationYear);
    this.educationEditing = true;
    this.showEducationsForm();
  }
  removeEducationRow(id: number) {
    this.educationCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.educations.length - 1;
    if (id < temp) {
      this.educationTracker++;
    }
    this.renderer.removeChild(this.educationsTableHtml.nativeElement, this.educationContent[id]);
    this.educationSorter.splice(id, 1);
    this.educations.splice(id, 1);
    this.educationDelete.splice(id, 1);
    this.educationEdit.splice(id, 1);
    this.educationContent.splice(id, 1);
    if (this.educations.length <= 0) {
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
  addCertification() {
    // Only push when everything is filled. (imitating required but not using it cuz it is not a required input field)
    if (this.validateCertification()) {
      this.certifications.push({ name: this.professionalForm.get('certifications.certificateName').value, giver: this.professionalForm.get('certifications.certificateGiver').value, year: this.professionalForm.get('certifications.certificateYear').value });
      this.certificationContent.push(document.createElement('tr'));
      this.updateCertificationDOM(this.certificationCounter);
      //certificationId will always increment on new certification addition and 
      // will fill certificationSorter with unique numbers which gets sorted allowing you to know the positions of each element
      let certificationId = this.certificationCounter + this.certificationTracker;
      this.certificationSorter.push(certificationId);
      //Added html element needs to be stored in order to allow deletion
      this.certificationContent[this.certificationCounter].setAttribute("data-elCounter", certificationId);
      this.renderer.appendChild(this.certificationsTableHtml.nativeElement, this.certificationContent[this.certificationCounter]);
      //Since delete btn is being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
      //Each delete btn needs to have unique id or eventlistener will be applied to same btn many times
      this.certificationDelete.push(document.getElementById(`deleteCertification${this.certificationSecondCounter}`));
      this.certificationEdit.push(document.getElementById(`editCertification${this.certificationSecondCounter}`));
      this.certificationSorter.sort();

      this.certificationEdit[this.certificationCounter].addEventListener("click", (event) => {
        let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
        this.certificationIndex = this.certificationSorter.indexOf(elId);
        this.showCertificationsEditorForm.call(this, this.certificationIndex);
      })
      this.certificationDelete[this.certificationCounter].addEventListener("click", (event) => {
        let elId: number = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-elCounter'));
        this.certificationIndex = this.certificationSorter.indexOf(elId);
        this.removeCertificationsRow.call(this, this.certificationIndex);
      }
      );

      if (this.certificationsEmpty) {
        this.certificationsEmpty = false;
      }
      this.certificationCounter++;
      this.certificationSecondCounter++;
      this.removeCertificationsForm();
    }
  }
  updateCertificationDOM(i: number) {
    this.certificationContent[i].innerHTML = `                 
    <td>${this.professionalForm.get('certifications.certificateName').value}</td>
    <td>${this.professionalForm.get('certifications.certificateYear').value}</td>
    <td>
      <div class="editBtns">
        <button type="button" class="edit" id="editCertification${this.certificationSecondCounter}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
        <button type="button" class="edit" id="deleteCertification${this.certificationSecondCounter}"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
      </div>
    </td>
  `;
  }
  editCertification(id: number) {
    this.certifications[id].name = this.professionalForm.get('certifications.certificateName').value;
    this.certifications[id].giver = this.professionalForm.get('certifications.certificateGiver').value;
    this.certifications[id].year = this.professionalForm.get('certifications.certificateYear').value;
    this.updateCertificationDOM(id);
    this.removeCertificationsForm();
  }

  showCertificationsEditorForm(id: number) {
    this.professionalForm.get('certifications.certificateName').setValue(this.certifications[id].name);
    this.professionalForm.get('certifications.certificateGiver').setValue(this.certifications[id].giver);
    this.professionalForm.get('certifications.certificateYear').setValue(this.certifications[id].year);
    this.certificationEditing = true;
    this.showCertificationsForm();
  }
  removeCertificationsRow(id: number) {
    this.certificationCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.certifications.length - 1;
    if (id < temp) {
      this.certificationTracker++;
    }
    this.renderer.removeChild(this.certificationsTableHtml.nativeElement, this.certificationContent[id]);
    this.certificationSorter.splice(id, 1);
    this.certifications.splice(id, 1);
    this.certificationDelete.splice(id, 1);
    this.certificationContent.splice(id, 1);
    if (this.certifications.length <= 0) {
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
  onSubmit() {
    if (this.selectedProfession == null || this.selectedFromYear == null || this.selectedToYear == null || this.checkedProfessions.length == 0) {
      window.scrollTo(0, 0);
    } else if (this.skillsEmpty) {
      this.scrollEl.nativeElement.scrollIntoView(true);
    } else {
      this.sellerService.getProfessionalInfo(this.selectedProfession, this.checkedProfessions, this.selectedFromYear, this.selectedToYear, this.skills, this.educations, this.certifications);
      this.sellerService.getSellerFormInfo();
    }
  }
}

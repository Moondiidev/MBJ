import { ElementRef } from '@angular/core';
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

  showSkills: boolean = false;
  showEducations: boolean = false;
  showCertifications: boolean = false;
  constructor(private sellerService: SellerSetUpService) { }

  ngOnInit(): void {
    this.professionalForm = new FormGroup({
      'skills': new FormGroup({
        'skillName': new FormControl(null, Validators.required),
        'skillLevel': new FormControl(0, Validators.required)
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

      this.skillsTableHtml.nativeElement.insertAdjacentHTML('beforeend',
        `                 
    <tr>
      <td>${this.professionalForm.get('skills.skillName').value}</td>
      <td>${this.professionalForm.get('skills.skillLevel').value}</td>
      <td>
        <div class="editBtns">
          <button type="button" class="edit"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
          <button type="button" class="edit"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
        </div>
      </td>
    </tr>
      `);

      if (this.skillsEmpty) {
        this.skillsEmpty = false;
      }
      console.log(this.skills);
    }
  }
  removeSkillsForm() {
    if (!this.skillsEmpty) {
      this.showSkills = false;
      this.resetSkillsForm();
    }
  }
  showSkillsForm() {
    this.showSkills = true;
  }
  resetSkillsForm() {
    this.professionalForm.get('skills.skillName').setValue(null);
    this.professionalForm.get('skills.skillLevel').setValue(0);
  }
  addEducation() {
    if (this.validateEducation()) {
      this.educations.push({ universityName: this.professionalForm.get('educations.universityName').value, major: this.professionalForm.get('educations.major').value, country: this.professionalForm.get('educations.country').value, title: this.professionalForm.get('educations.title').value, graduationYear: this.professionalForm.get('educations.graduationYear').value });
      this.educationsTableHtml.nativeElement.insertAdjacentHTML('beforeend',
        `                 
    <tr>
      <td>${this.professionalForm.get('educations.major').value}</td>
      <td>${this.professionalForm.get('educations.graduationYear').value}</td>
      <td>
        <div class="editBtns">
          <button type="button" class="edit"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
          <button type="button" class="edit"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
        </div>
      </td>
    </tr>
      `);
      if (this.educationsEmpty) {
        this.educationsEmpty = false;
      }
      console.log(this.educations);
    }
  }
  removeEducationsForm() {
    if (!this.educationsEmpty) {
      this.showEducations = false;
      this.resetEducationsForm();
    }
  }
  showEducationsForm() {
    this.showEducations = true;
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
      this.certificationsTableHtml.nativeElement.insertAdjacentHTML('beforeend',
        `                 
    <tr>
      <td>${this.professionalForm.get('certifications.certificateName').value}</td>
      <td>${this.professionalForm.get('certifications.certificateYear').value}</td>
      <td>
        <div class="editBtns">
          <button type="button" class="edit"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
          <button type="button" class="edit"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
        </div>
      </td>
    </tr>
      `);
      if (this.certificationsEmpty) {
        this.certificationsEmpty = false;
      }
      console.log(this.certifications);
    }
  }
  removeCertificationsForm() {
    if (!this.certificationsEmpty) {
      this.showCertifications = false;
      this.resetCertificationsForm();
    }
  }
  showCertificationsForm() {
    this.showCertifications = true;
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
    } else if (true) {
      this.scrollEl.nativeElement.scrollIntoView(true);
    } else {
      this.sellerService.getProfessionalInfo(this.selectedProfession, this.checkedProfessions, this.selectedFromYear, this.selectedToYear, this.skills, this.educations, this.certifications);
      this.sellerService.getSellerFormInfo();
    }
  }
}

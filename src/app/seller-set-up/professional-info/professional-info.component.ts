import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfessionalModel } from 'src/app/shared/professional.model';
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
  graphicDesignNames : Array<string> = ['Хүүхэлдэйн Кино & Комик Сэтгүүл','3Д Модель Дүр & Бүдээгтхүүн Дизайн','Вэб Дизайн','Урилга & Бизнес Карт','Тоглоом Дизайн','Хүрээлэн Буй Орчин','Зар Суртчилгаа','Photoshop Эвлүүлэг','Лого Дизайн','Ном & Цомог Хавтас','Инфограпик','Архитектур','Бусад'];
  marketingNames : Array<string> = ['Эмэйл Маркетинг','Вэб Сайт Хөдөлгөөн Ихэсгэх','Инфлүнсэр Маркетинг','Видео Маркетинг','SEO','Сошиал Мэдиа Маркетинг','Бусад'];
  soundNames : Array<string> = ['Хөгжим Найруулагч & Зохиолч','SFX','Дуу Оруулаг','Дуучин','Бусад'];
  writingNames : Array<string> = ['Сэтгүүл & Блог','Хяналтын Уншилт & Засах','Гадааг Хэл Орчуулагa','Хууль Бичвэр','Техникийн Бичвэр','Бүтээгдэхүүн Тайлбар','Уран Бичвэр','Товч Намтар (CV)','Бусад'];
  videoNames : Array<string> = ['Киноны Трейлер','Видео Тоглоомны Трейлер','Видео Эвлүүлэг','Богино Хэмжээний Зар Сурталчилгаа','3Д Хүүхэлдэйн Кино','VFX','2Д Хүүхэлдэйн Кино','Бусад'];
  programmingNames : Array<string> = ['Вэб Сайт Програмчлал','Хөөрөлдөгч Бот','Видео Тоглоом Хөгжүүлэх','Гар Утасны АПП Програмчлал','WordPress','Мэдээлэл Судлал & Тайлан','Цахим Аюулгуй Байдал','Бусад'];
  otherNames : Array<string> = ['Дасгал & Хоол Тэжээл Зөвлөгөө','Санхүүгийн Зөвлөгөө','Сэтгэл Зүйн Эмчилгээ','Бусад'];

  checkedProfessions : Array<string> = [];
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
  constructor(private sellerService : SellerSetUpService) { }

  ngOnInit(): void {
    this.professionalForm = new FormGroup({
      'profession': new FormControl(null),
      'subProfession': new FormControl(null),
    })
    this.fillFromYears();
  }

  onSubmit() {

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
        this.createProfession();
      } else {
        event.target.checked = false;
      }
    } else if (this.counter > 0) {
      this.counter--;
    } else if (this.counter === 0) {
      // ERROR NO OCCUPATION SELECTED
    }
  }
  createProfession(){
    const newProfession = new ProfessionalModel(this.selectedProfession,this.checkedProfessions,this.selectedFromYear,this.selectedToYear);
    this.sellerService.professionalModel = newProfession;
    console.log(this.sellerService.professionalModel);
  }
}

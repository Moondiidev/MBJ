import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {
  professionalForm : FormGroup;
  closeDropdown = false;
  professions = ['График Дизайн', 'Онлайн Mаркетинг', 'Дуу & Ая', 'Бичиг & Орчуулагa', 'Видео & Аниматион', 'Программ & Технологи', 'Бусад'];
  fromYears = [];
  toYears = [];
  currentYear = new Date().getFullYear();
  howManyYears = 50;
  professionText = "График Дизайн";
  fromYearText = "Жил";
  toYearText = "Жил";
  selectedToYear : number;
  selectedFromYear : number;
  //Default is graphic design
  selectedProfession : string = "График Дизайн";

  constructor() { }

  ngOnInit(): void {
    this.professionalForm = new FormGroup({
      'profession' : new FormControl(null),
      'subProfession' : new FormControl(null),
    })
    this.fillFromYears();
  }

  onSubmit(){

  }
  onSelectProfession(profession : string){
    this.professionText = profession;
    this.selectedProfession = profession;
  }
  onSelectFromYear(fromYear: number, index : number){
    this.fromYearText = fromYear.toString();
    this.fillToYears(fromYear,index);
    // Can't work negative years
    if(fromYear > this.selectedToYear){
      this.toYearText = "Жил";
    }
  }
  onSelectToYear(toYear: number){
    this.toYearText = toYear.toString();
    this.selectedToYear = toYear;
  }
  fillFromYears(){
    for(let i = 0; i <= this.howManyYears; i++){
      let tempYear = this.currentYear - i;
      this.fromYears.push(tempYear);
    }
  }
  fillToYears(fromYear: number, index : number){
    this.toYears = [];
    // 2020 (index = 0) year to 2020 works. 
    if(index === 0){ index = 1};
    const newYears = this.fromYears.slice(0,index);
    this.toYears.push(...newYears);
  }
}

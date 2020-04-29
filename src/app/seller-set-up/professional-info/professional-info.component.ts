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
  professions = ['График Дизайн', 'Онлайн маркетинг', 'Дуу & Ая', 'Бичиг & Орчуулаг', 'Видео & Аниматион', 'Программ & Технологи', 'Бусад'];
  constructor() { }

  ngOnInit(): void {
    this.professionalForm = new FormGroup({
      'profession' : new FormControl(null),
      'subProfession' : new FormControl(null),
    })
  }
  onSubmit(){

  }
}

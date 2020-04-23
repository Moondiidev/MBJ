import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {
  professionalForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.professionalForm = new FormGroup({
      'ok' : new FormControl(null)
    })
  }
  onSubmit(){

  }
}

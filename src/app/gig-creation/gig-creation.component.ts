import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gig-creation',
  templateUrl: './gig-creation.component.html',
  styleUrls: ['./gig-creation.component.scss']
})
export class GigCreationComponent implements OnInit {

  gigForm;
  constructor() { }

  ngOnInit(): void {
    this.gigForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
    })
  }
}

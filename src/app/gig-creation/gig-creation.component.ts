import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-gig-creation',
  templateUrl: './gig-creation.component.html',
  styleUrls: ['./gig-creation.component.scss']
})
export class GigCreationComponent implements OnInit {

  gigForm: FormGroup;

  graphicDesignNames: Array<string> = environment.jobCategories.graphicDesignNames;
  marketingNames: Array<string> = environment.jobCategories.marketingNames;
  soundNames: Array<string> = environment.jobCategories.soundNames;
  writingNames: Array<string> = environment.jobCategories.writingNames;
  videoNames: Array<string> = environment.jobCategories.videoNames;
  programmingNames: Array<string> = environment.jobCategories.programmingNames;
  otherNames: Array<string> = environment.jobCategories.otherNames;
  categories = [this.graphicDesignNames, this.marketingNames, this.soundNames, this.writingNames, this.videoNames, this.programmingNames, this.otherNames];

  constructor() { }

  ngOnInit(): void {
    this.gigForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
    })
  }
  onSelectCategory(){
    
  }
}

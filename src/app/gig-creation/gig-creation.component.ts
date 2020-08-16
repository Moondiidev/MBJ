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
  professions = environment.professions;
  graphicDesignNames: Array<string> = environment.jobCategories.graphicDesignNames;
  marketingNames: Array<string> = environment.jobCategories.marketingNames;
  soundNames: Array<string> = environment.jobCategories.soundNames;
  writingNames: Array<string> = environment.jobCategories.writingNames;
  videoNames: Array<string> = environment.jobCategories.videoNames;
  programmingNames: Array<string> = environment.jobCategories.programmingNames;
  otherNames: Array<string> = environment.jobCategories.otherNames;
  categories = {
    [this.professions.graphicDesignNames]: this.graphicDesignNames,
    [this.professions.marketingNames]: this.marketingNames,
    [this.professions.soundNames]: this.soundNames,
    [this.professions.writingNames]: this.writingNames,
    [this.professions.videoNames]: this.videoNames,
    [this.professions.programmingNames]: this.programmingNames,
    [this.professions.otherNames]: this.otherNames
  };
  chosenCategory = this.writingNames;
  chosenCategoryName = this.professions.writingNames;
  chosenSubCategory = this.chosenCategory[0];
  constructor() { }

  ngOnInit(): void {
    this.gigForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
    })
  }
  onSelectCategory(chosenCategoryKey, chosenCategoryValue) {
    this.chosenCategoryName = chosenCategoryKey;
    this.chosenCategory = chosenCategoryValue;
    this.chosenSubCategory = this.chosenCategory[0];
  }
  onSelectSubCategory(chosenSubCategoryValue) {
    this.chosenSubCategory = chosenSubCategoryValue;
  }
}

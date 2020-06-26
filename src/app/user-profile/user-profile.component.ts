import { ElementRef, ViewChild } from '@angular/core';
import { SellerSetUpService } from './../seller-set-up/seller-set-up.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AppManagerService } from './../shared/app-manager.service';
import { AuthService } from './../auth/auth.service';
import { signupData } from './../auth/signupData.interface';
import { Subscription } from 'rxjs';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { PersonalModel } from 'src/app/shared/personal.model';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserReviewModel } from './userReview.model';
import { educationsInterface } from '../seller-set-up/educations.interface';
import { certificationsInterface } from '../seller-set-up/certifications.interface';
import { skillsInterface } from '../seller-set-up/skills.interface';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  reviewChoices: Array<string> = ['Худалдагчийн', 'Худалдан авагчийн'];
  currentChoice: number = 0;
  userSignupData: signupData = {
    userName: '',
    joinDate: '',
    email: '',
    password: '',
  };
  userLastDeliveryTime: string = '';
  userResponseTime: string = '';
  personalDataSub: Subscription;
  professionalDataSub: Subscription;
  userNameSub: Subscription;
  privateMode: boolean = true;
  editableInputValue: Array<string> = ["Би бол МБЖ-ийн гишүүн", ""];
  editableInputForm: Array<FormGroup> = [];
  editingInput: Array<boolean> = [false, false];

  reviews: Array<UserReviewModel> = [{ name: 'allah ala tunji', rating: 2, review: 'It was great experience. Great communication. Thank you :)', date: '9 sariin omno' }];
  professionalData: ProfessionalModel;

  // *********************************************** //
  // **************** MINIFORMS DATA *************** //
  // *********************************************** //

  skillsForm: FormGroup;
  educationsForm: FormGroup;
  certificationsForm: FormGroup;

  miniFormsEmpty: Array<boolean> = [true, true, true];
  miniFormsShow: Array<boolean> = [false, false, false];


  skills: skillsInterface;
  skillIndex: number = 0;
  skillTracker: number = 0;
  //Each added el will have unique increasing number whenever new el is added
  skillCounter: number = 0;
  //Stores added <tr> element references to later use them to remove correct child from DOM.
  skillContent = [];
  skillEditing = false;


  educations: educationsInterface;
  educationIndex: number = 0;
  educationTracker: number = 0;
  educationCounter: number = 0;
  educationContent = [];
  educationEditing = false;


  certifications: certificationsInterface;
  certificationIndex: number = 0;
  certificationTracker: number = 0;
  certificationCounter: number = 0;
  certificationContent = [];
  certificationEditing = false;

  // *********************************************** //
  // *********************************************** //
  // *********************************************** //

  constructor(private sellerService: SellerSetUpService, private authService: AuthService, private appManagerService: AppManagerService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.userNameSub = this.appManagerService.userName.subscribe(name => {
      this.userSignupData.userName = name;
      this.getUserData();
    });
    this.editableInputForm[0] = new FormGroup({
      'inputValue': new FormControl(null)
    })
    this.editableInputForm[1] = new FormGroup({
      'inputValue': new FormControl(null)
    })
    this.skillsForm = new FormGroup({
      'skillName': new FormControl(null),
      'skillLevel': new FormControl(0)
    });
    this.educationsForm = new FormGroup({
      'universityName': new FormControl(null),
      'major': new FormControl(null),
      'country': new FormControl(0),
      'title': new FormControl(0),
      'graduationYear': new FormControl(0)
    });
    this.certificationsForm = new FormGroup({
      'certificateName': new FormControl(null),
      'certificateGiver': new FormControl(null),
      'certificateYear': new FormControl(0)
    })
  }
  getUserData() {
    this.personalDataSub = this.sellerService.fetchPersonalInfo().subscribe((data: PersonalModel) => {
      console.log(data);
      if (data != null) {
        this.editableInputValue[1] = data.personalDescription;
      }
    })
    //Get professional data from firebase database
    this.professionalDataSub = this.sellerService.fetchProfessionalInfo().subscribe((data: ProfessionalModel) => {
      console.log(data);
      //Check data
      if (data != null || data != undefined) {
        this.professionalData = data;
        this.useProfessionalData();
      }
    })

    //Get signupData from firebase database
    this.authService.getUserJoinDate(this.userSignupData.userName).subscribe(date => {
      this.userSignupData.joinDate = date;
    })

  }
  ngOnDestroy(): void {
    this.userNameSub.unsubscribe();
  }

  //ngClass uses currentChoice var to decide which el should have active class added. 
  //ngFor allows (click) event to know which elemnt was clicked 
  choiceChange(choiceNum: number) {
    this.currentChoice = choiceNum;
  }

  onEditInput(i: number) {
    this.editableInputForm[i].get('inputValue').setValue(this.editableInputValue[i]);
    this.editingInput[i] = true;
  }
  onCancelEditingInput(i: number) {
    this.editingInput[i] = false;
  }
  onUpdateInput(i: number) {
    this.editingInput[i] = false;
    this.editableInputValue[i] = this.editableInputForm[i].get('inputValue').value;
  }

  // ***************************************************************************** //
  // ****************************** MINIFORMS ************************************ //
  // ***************************************************************************** //

  // These are literally just used to keep firebase data the same while I replace the miniform datas.
  selectedProfession;
  checkedProfessions;
  selectedFromYear;
  selectedToYear;

  @ViewChild('skillsDataDisplayer') skillsDataDisplayerHTML: ElementRef;
  @ViewChild('educationsDataDisplayer') educationsDataDisplayerHTML: ElementRef;
  @ViewChild('certificationsDataDisplayer') certificationsDataDisplayerHTML: ElementRef;

  saveProfessionalData() {
    this.sellerService.saveProfessionalInfo(this.selectedProfession, this.checkedProfessions, this.selectedFromYear, this.selectedToYear, this.skills, this.educations, this.certifications);
  }
  useProfessionalData() {
    if (this.professionalData.profession !== undefined) {
      this.selectedProfession = this.professionalData.profession;
    }
    if (this.professionalData.professionSkills !== undefined) {
      this.checkedProfessions = this.professionalData.professionSkills;
    }
    if (this.professionalData.fromYear !== undefined) {
      this.selectedFromYear = this.professionalData.fromYear;
    }
    if (this.professionalData.toYear !== undefined) {
      this.selectedToYear = this.professionalData.toYear;
    }
    if (this.professionalData.skills !== undefined) {
      if (this.professionalData.skills.data !== undefined && this.professionalData.skills.sorter !== undefined) {
        this.skills = {
          data: this.professionalData.skills.data,
          sorter: this.professionalData.skills.sorter
        }
        if (this.miniFormsEmpty[0]) {
          this.miniFormsShow[0] = false;
          this.miniFormsEmpty[0] = false;
        }
        this.populateSkillsTable();
      }
    }
    if (this.professionalData.educations !== undefined) {
      if (this.professionalData.educations.data !== undefined && this.professionalData.educations.sorter !== undefined) {
        this.educations = {
          data: this.professionalData.educations.data,
          sorter: this.professionalData.educations.sorter
        }
        if (this.miniFormsEmpty[1]) {
          this.miniFormsShow[1] = false;
          this.miniFormsEmpty[1] = false;
        }
        this.populateEducationsTable();
      }

    }
    if (this.professionalData.certifications !== undefined) {
      if (this.professionalData.certifications.data !== undefined && this.professionalData.certifications.sorter !== undefined) {
        this.certifications = {
          data: this.professionalData.certifications.data,
          sorter: this.professionalData.certifications.sorter
        }
        if (this.miniFormsEmpty[2]) {
          this.miniFormsShow[2] = false;
          this.miniFormsEmpty[2] = false;
        }
        this.populateCertificationsTable();
      }
    }
  }

  populateSkillsTable() {
    for (let i = 0; i < this.skills.data.length; i++) {
      this.skillContent.push(document.createElement('tr'));
      this.updateSkillDOM(this.skillCounter);
      this.skillContent[this.skillCounter].setAttribute("data-elCounter", this.skills.sorter[i].toString());

      this.renderer.appendChild(this.skillsDataDisplayerHTML.nativeElement, this.skillContent[this.skillCounter]);
      this.skills.sorter.sort();
      this.addSkillEditListener(this.skillCounter);
      //Starting from the second el, user will have option to delete (cuz first one is required)
      if (this.skillContent.length > 1) {
        this.addSkillDeleteListener(this.skillCounter);
      }
      this.skillCounter++;
    }
  }
  populateEducationsTable() {
    for (let i = 0; i < this.educations.data.length; i++) {
      this.educationContent.push(document.createElement('tr'));
      this.updateEducationDOM(this.educationCounter);
      this.educationContent[this.educationCounter].setAttribute("data-elCounter", this.educations.sorter[i].toString());

      this.renderer.appendChild(this.educationsDataDisplayerHTML.nativeElement, this.educationContent[this.educationCounter]);

      this.educations.sorter.sort();

      this.addEducationEditListener(this.educationCounter);
      this.addEducationDeleteListener(this.educationCounter);
      this.educationCounter++;
    }
  }
  populateCertificationsTable() {
    for (let i = 0; i < this.certifications.data.length; i++) {
      this.certificationContent.push(document.createElement('tr'));
      this.updateCertificationDOM(this.certificationCounter);
      this.certificationContent[this.certificationCounter].setAttribute("data-elCounter", this.certifications.sorter[i].toString());

      this.renderer.appendChild(this.certificationsDataDisplayerHTML.nativeElement, this.certificationContent[this.certificationCounter]);

      this.certifications.sorter.sort();

      this.addCertificationEditListener(this.certificationCounter);
      this.addCertificationDeleteListener(this.certificationCounter);

      this.certificationCounter++;
    }
  }
  showMiniForm(i: number) {
    this.miniFormsShow[i] = true;
  }
  resetMiniForm(i: number) {
    switch (i) {
      case 0:
        this.skillsForm.get('skillName').setValue(null);
        this.skillsForm.get('skillLevel').setValue(0);
        break;
      case 1:
        this.educationsForm.get('universityName').setValue(null);
        this.educationsForm.get('major').setValue(null);
        this.educationsForm.get('country').setValue(0);
        this.educationsForm.get('title').setValue(0);
        this.educationsForm.get('graduationYear').setValue(0);
        break;
      case 2:
        this.certificationsForm.get('certificateName').setValue(null);
        this.certificationsForm.get('certificateGiver').setValue(null);
        this.certificationsForm.get('certificateYear').setValue(0);
        break;
      default:
        return;
    }
  }
  removeMiniForm(i: number) {
    if (this.certificationEditing) {
      this.certificationEditing = false;
    }
    if (!this.miniFormsEmpty[i]) {
      this.miniFormsShow[i] = false;
      this.resetMiniForm(i);
    }
  }
  // **********************************************************************//
  // *************************** SKILL MINIFORM ***************************//
  // **********************************************************************//

  addSkill() {
    this.skills.data.push({ name: this.skillsForm.get('skillName').value, experienceLevel: this.skillsForm.get('skillLevel').value });

    this.skillContent.push(document.createElement('tr'));
    this.updateSkillDOM(this.skillCounter);

    //skillId will always increment on new skill addition and 
    //will fill skills.sorter with unique numbers which gets sorted allowing you to know the positions of each element
    let skillId = this.skillCounter + this.skillTracker;
    this.skills.sorter.push(skillId);
    //Added html element needs to be stored in order to allow deletion
    this.skillContent[this.skillCounter].setAttribute("data-elCounter", skillId.toString());
    this.renderer.appendChild(this.skillsDataDisplayerHTML.nativeElement, this.skillContent[this.skillCounter]);

    this.skills.sorter.sort();

    this.addSkillEditListener(this.skillCounter);
    //Starting from the second el, user will have option to delete (cuz first one is required)
    if (this.skillContent.length > 1) {
      this.addSkillDeleteListener(this.skillCounter);
    }

    if (this.miniFormsEmpty[0]) {
      this.miniFormsEmpty[0] = false;
    }
    this.saveProfessionalData();
    this.skillCounter++;
    this.removeMiniForm(0);
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
    <div class="padding-bot-sm flex-spaceBetween" >
      <div class="profileInfo_detail__skill">
        <p class="paragraph-lg">${this.skills.data[i].name}</p>
      </div>
      <div class="editBtns">
        <button type="button" class="edit" id="editSkill${i}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
        ${trashCanHTML}
      </div>
    </div>
    `
  }
  editSkill(id: number) {
    this.skills.data[id].name = this.skillsForm.get('skillName').value;
    this.skills.data[id].experienceLevel = this.skillsForm.get('skillLevel').value;

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
    this.saveProfessionalData();
    this.removeMiniForm(0);
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
    this.skillsForm.get('skillName').setValue(this.skills.data[id].name);
    this.skillsForm.get('skillLevel').setValue(this.skills.data[id].experienceLevel);
    this.skillEditing = true;
    this.showMiniForm(0);
  }

  removeSkillRow(id: number) {
    this.skillCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.skills.data.length - 1;
    if (id < temp) {
      this.skillTracker++;
    }
    this.renderer.removeChild(this.skillsDataDisplayerHTML.nativeElement, this.skillContent[id]);
    this.skills.sorter.splice(id, 1);
    this.skills.data.splice(id, 1);
    this.skillContent.splice(id, 1);
    if (this.skills.data.length <= 0) {
      this.miniFormsEmpty[0] = true;
      this.showMiniForm(0);
    }
    this.saveProfessionalData();
  }

  // *********************************************************************//
  // ************************ EDUCATION MINIFORM *************************//
  // *********************************************************************//

  addEducation() {
    this.educations.data.push({ universityName: this.educationsForm.get('universityName').value, major: this.educationsForm.get('major').value, country: this.educationsForm.get('country').value, title: this.educationsForm.get('title').value, graduationYear: this.educationsForm.get('graduationYear').value });
    this.educationContent.push(document.createElement('tr'));
    this.updateEducationDOM(this.educationCounter);
    let educationId = this.educationCounter + this.educationTracker;
    this.educations.sorter.push(educationId);
    this.educationContent[this.educationCounter].setAttribute("data-elCounter", educationId);
    this.renderer.appendChild(this.educationsDataDisplayerHTML.nativeElement, this.educationContent[this.educationCounter]);

    this.educations.sorter.sort();
    this.addEducationEditListener(this.educationCounter);
    this.addEducationDeleteListener(this.educationCounter);
    if (this.miniFormsEmpty[1]) {
      this.miniFormsEmpty[1] = false;
    }
    this.saveProfessionalData();
    this.educationCounter++;
    this.removeMiniForm(1);
  }
  updateEducationDOM(i: number) {
    this.educationContent[i].innerHTML =
    `            
    <div class="padding-bot-sm flex-spaceBetween ">
      <div class="profileInfo_detail__education">
        <p class="paragraph-lg">${this.educations.data[i].title} - ${this.educations.data[i].major}</p>
        <p class="paragraph-lg greyText margin-top-xxs">${this.educations.data[i].universityName}, ${this.educations.data[i].country},
        ${this.educations.data[i].graduationYear}</p>
      </div>
      <div class="editBtns">
        <button type="button" class="edit" id="editEducation${i}"> <img src="../../../assets/img/draw.svg" class="editIcon" alt=""></button>
        <button type="button" class="edit" id="deleteEducation${i}"> <img src="../../../assets/img/rubbish-can.svg" class="editIcon" alt=""></button>
      </div>
    </div>
    `;
  }
  editEducation(id: number) {
    this.educations.data[id].universityName = this.educationsForm.get('universityName').value;
    this.educations.data[id].major = this.educationsForm.get('major').value;
    this.educations.data[id].country = this.educationsForm.get('country').value;
    this.educations.data[id].title = this.educationsForm.get('title').value;
    this.educations.data[id].graduationYear = this.educationsForm.get('graduationYear').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.educationCounter--
    this.updateEducationDOM(id);
    this.educationCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addEducationEditListener(id);
    this.addEducationDeleteListener(id);
    this.saveProfessionalData();
    this.removeMiniForm(1);
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
    this.educationsForm.get('universityName').setValue(this.educations.data[id].universityName);
    this.educationsForm.get('major').setValue(this.educations.data[id].major);
    this.educationsForm.get('country').setValue(this.educations.data[id].country);
    this.educationsForm.get('title').setValue(this.educations.data[id].title);
    this.educationsForm.get('graduationYear').setValue(this.educations.data[id].graduationYear);
    this.educationEditing = true;
    this.showMiniForm(1);
  }
  removeEducationRow(id: number) {
    this.educationCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.educations.data.length - 1;
    if (id < temp) {
      this.educationTracker++;
    }
    this.renderer.removeChild(this.educationsDataDisplayerHTML.nativeElement, this.educationContent[id]);
    this.educations.sorter.splice(id, 1);
    this.educations.data.splice(id, 1);
    this.educationContent.splice(id, 1);
    if (this.educationContent.length <= 0) {
      this.miniFormsEmpty[1] = true;
      this.showMiniForm(1);
    }
    this.saveProfessionalData();
  }

  // *************************************************************************//
  // ************************ CERTIFICATION MINIFORM *************************//
  // *************************************************************************//

  addCertification() {
    // Only push when everything is filled. (imitating required but not using it cuz it is not a required input field)
    this.certifications.data.push({ name: this.certificationsForm.get('certificateName').value, giver: this.certificationsForm.get('certificateGiver').value, year: this.certificationsForm.get('certificateYear').value });
    this.certificationContent.push(document.createElement('tr'));
    this.updateCertificationDOM(this.certificationCounter);

    let certificationId = this.certificationCounter + this.certificationTracker;
    this.certifications.sorter.push(certificationId);
    this.certificationContent[this.certificationCounter].setAttribute("data-elCounter", certificationId);
    this.renderer.appendChild(this.certificationsDataDisplayerHTML.nativeElement, this.certificationContent[this.certificationCounter]);

    this.certifications.sorter.sort();

    this.addCertificationEditListener(this.certificationCounter)
    this.addCertificationDeleteListener(this.certificationCounter);

    if (this.miniFormsEmpty[2]) {
      this.miniFormsEmpty[2] = false;
    }
    this.saveProfessionalData();
    this.certificationCounter++;
    this.removeMiniForm(2);
  }
  updateCertificationDOM(i: number) {
    this.certificationContent[i].innerHTML = `   
    <div class="padding-bot-sm flex-spaceBetween ">
      <div class="profileInfo_detail__certification">
        <p class="paragraph-lg">${this.certifications.data[i].name}</p>
        <p class="paragraph-lg greyText margin-top-xxs">${this.certifications.data[i].giver} ${this.certifications.data[i].year}</p>
      </div>
    </div>
  `;
  }
  editCertification(id: number) {
    this.certifications.data[id].name = this.certificationsForm.get('certificateName').value;
    this.certifications.data[id].giver = this.certificationsForm.get('certificateGiver').value;
    this.certifications.data[id].year = this.certificationsForm.get('certificateYear').value;

    //At the end of adding row, counter is incremented in order to move to the next row but since we are staying on the same el, we keep the counter to previous el.
    this.certificationCounter--
    this.updateCertificationDOM(id);
    this.certificationCounter++;

    //Adding Eventlitsteners
    //Since btns are being added dynamically, I needed to add listener like this instead of (click) which doesn't work.
    this.addCertificationEditListener(id)
    this.addCertificationDeleteListener(id);
    this.removeMiniForm(2);
    this.saveProfessionalData();
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
    this.certificationsForm.get('certificateName').setValue(this.certifications.data[id].name);
    this.certificationsForm.get('certificateGiver').setValue(this.certifications.data[id].giver);
    this.certificationsForm.get('certificateYear').setValue(this.certifications.data[id].year);
    this.certificationEditing = true;
    this.showMiniForm(2);
  }
  removeCertificationRow(id: number) {
    this.certificationCounter--;
    //If item is removed before the end, add to the tracker
    let temp = this.certifications.data.length - 1;
    if (id < temp) {
      this.certificationTracker++;
    }
    this.renderer.removeChild(this.certificationsDataDisplayerHTML.nativeElement, this.certificationContent[id]);
    this.certifications.sorter.splice(id, 1);
    this.certifications.data.splice(id, 1);
    this.certificationContent.splice(id, 1);
    if (this.certificationContent.length <= 0) {
      this.miniFormsEmpty[2] = true;
      this.showMiniForm(2);
    }
    this.saveProfessionalData();
  }
}
  // ***************************************************************************** //
  // ***************************************************************************** //
  // ***************************************************************************** //
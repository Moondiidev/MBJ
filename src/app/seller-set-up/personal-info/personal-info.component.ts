import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerSetUpService } from '../seller-set-up.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { PersonalModel } from 'src/app/shared/personal.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  selectedImage = null;
  url = null;
  noOfChar: string = "";
  personalForm: FormGroup;
  ref;
  task;
  uploadProgress;
  progressValue: number;
  hideProgress: boolean = true;
  allInfo: PersonalModel;
  folderName: string = 'profileImages';
  imageName: string = 'user1profileImg';
  constructor(private http: HttpClient, private sellerService: SellerSetUpService, private router: Router, private route: ActivatedRoute, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.personalForm = new FormGroup({
      'name': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required)
      }),
      'description': new FormControl(null, Validators.required)
    });
    this.getProfileImage();
    // Seller-set-up header navigation only allows navigation when form is valid
    this.personalForm.statusChanges.subscribe(status => {
      if (status === "VALID") {
        this.sellerService.personalFormValid.next(true);
      }
    })

    this.sellerService.fetchPersonalInfo().subscribe((data: PersonalModel) => {
      this.allInfo = data;
      if (this.allInfo !== null) {
        if (this.allInfo.firstname !== undefined) {
          this.personalForm.get('name.firstName').setValue(this.allInfo.firstname);
        }
        if (this.allInfo.lastname !== undefined) {
          this.personalForm.get('name.lastName').setValue(this.allInfo.lastname);
        }
        if (this.allInfo.personalDescription !== undefined) {
          this.personalForm.get('description').setValue(this.allInfo.personalDescription);
        }
      }
      setInterval(() => {
        this.sellerService.savePersonalInfo(this.personalForm.get('name.firstName').value, this.personalForm.get('name.lastName').value, this.personalForm.get('description').value);
      }, 5000);
    });
  }
  getProfileImage() {
    //Get profile image and show it
    this.afStorage.ref(`${this.folderName}/${this.imageName}`).getDownloadURL().subscribe(url => {
      this.url = url;
    });
  }
  professionalNav() {
    this.sellerService.professionalNav();
    this.sellerService.savePersonalInfo(this.personalForm.get('name.firstName').value, this.personalForm.get('name.lastName').value, this.personalForm.get('description').value);
  }
  onSubmit() {
    if (this.personalForm.valid) {
      this.router.navigate(['../professional'], { relativeTo: this.route });
      this.professionalNav();
    }
  }
  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    //Call these only when new file is selected and not when user cancels file upload.
    if (this.selectedImage !== undefined) {
      //Show progress bar
      this.hideProgress = false;

      //FIREBASE UPLOAD
      this.ref = this.afStorage.ref(`${this.folderName}/${this.imageName}`);
      this.task = this.ref.put(this.selectedImage);
      this.uploadProgress = this.task.percentageChanges();
      this.uploadProgress.subscribe(progress => {
        this.progressValue = progress;
        if (this.progressValue === 100) {
          //Hide progress
          this.hideProgress = true;
          //CHANGE PROFILE IMAGE PREVIEW
          const reader = new FileReader();
          reader.readAsDataURL(this.selectedImage);
          reader.onload = (event => {
            this.url = event.target.result;
          })
        }
      })
    }
  }
}

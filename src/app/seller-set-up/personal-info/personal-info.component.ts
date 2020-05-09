import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerSetUpService } from '../seller-set-up.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';

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
  constructor(private http: HttpClient, private sellerService: SellerSetUpService, private router: Router, private route: ActivatedRoute, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.personalForm = new FormGroup({
      'profileImage': new FormControl(null, Validators.required),
      'name': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required)
      }),
      'description': new FormControl(null, Validators.required)
    });

    // Seller-set-up header navigation only allows navigation when form is valid
    this.personalForm.statusChanges.subscribe(status => {
      if (status === "VALID") {
        this.sellerService.personalFormValid.next(true);
      }
    })
  }
  professionalNav() {
    this.sellerService.professionalNav();
    this.sellerService.getPersonalInfo(this.personalForm.get('profileImage').value,this.personalForm.get('name.firstName').value,this.personalForm.get('name.lastName').value, this.personalForm.get('description').value);
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
      this.ref = this.afStorage.ref('profileImages/user1profileImg');
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

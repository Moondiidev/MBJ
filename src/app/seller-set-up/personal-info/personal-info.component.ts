import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerSetUpService } from '../seller-set-up.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  selectedImage = null;
  url = null;
  noOfChar : string = "";
  personalForm : FormGroup;

  constructor(private http : HttpClient, private sellerService : SellerSetUpService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personalForm = new FormGroup({
      'profileImage' : new FormControl(null, Validators.required),
      'name': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required)
      }),
      'description': new FormControl(null, Validators.required)
    });
    
    // Seller-set-up header navigation only allows navigation when form is valid
    this.personalForm.statusChanges.subscribe(status =>{
      if(status === "VALID"){
        this.sellerService.personalFormValid.next(true);
      }
    })
  }
  professionalNav(){
    this.sellerService.professionalNav();
  }
  onSubmit(){
    if(this.personalForm.valid){
      this.router.navigate(['../professional'], {relativeTo: this.route});
      this.professionalNav();
    }
  }
  onFileSelected(event){
    this.selectedImage = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = (event => {
      this.url = event.target.result;
    })
  }
}

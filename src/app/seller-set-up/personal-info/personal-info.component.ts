import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerSetUpService } from '../seller-set-up.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  selectedImage = null;
  url = null;
  noOfChar : string = "";
  constructor(private http : HttpClient, private sellerService : SellerSetUpService) { }

  ngOnInit(): void {}

  onFileSelected(event){
    this.selectedImage = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = (event => {
      this.url = event.target.result;
    })
  }
  professionalNav(){
    this.sellerService.professionalNav();
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  selectedImage = null;
  url = null;
  bruh = false;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {}

  onFileSelected(event){
    this.selectedImage = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = (event => {
      this.url = event.target.result;
      this.bruh = true;
    })
  }
}

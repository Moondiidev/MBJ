import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userName: string = "Bruhman";
  userJoinDate: string;
  userResponseTime: string;
  personalDescription: string;
  professionalEducation: string;
  professionalSkills: string;
  constructor() { }

  ngOnInit(): void {
  }

}

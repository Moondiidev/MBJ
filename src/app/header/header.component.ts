import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : boolean = false;
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  onClick(){
    alert("bruh");
  }
  resetForm(){
    this.authService.resetForm.next();
  }
}

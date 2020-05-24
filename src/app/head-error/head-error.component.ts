import { HeaderErrorService } from './header-error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-error',
  templateUrl: './head-error.component.html',
  styleUrls: ['./head-error.component.scss']
})
export class HeadErrorComponent implements OnInit {
  errorMsg: string;

  constructor(private headerErrorService: HeaderErrorService) { }

  ngOnInit(): void {
    this.headerErrorService.headerErrorMsg.subscribe(error => {
      this.errorMsg = error;
    })
  }
}

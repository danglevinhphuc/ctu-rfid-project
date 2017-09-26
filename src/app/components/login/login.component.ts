import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleLogin(){
    $("app-login").animate({
      top: 'toggle',
      opacity: 'toggle'
    });
    $("#backgroundDisable").toggle();
  }

}

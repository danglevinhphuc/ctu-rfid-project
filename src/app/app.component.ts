import { Component } from '@angular/core';
declare var $ :any;

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'home';

  toggleLogin(){
    $("app-login").animate({
      top: 'toggle',
      opacity: 'toggle'
    });
    $("#backgroundDisable").toggle();
  }

  closeLogin(){
    $("app-login").animate({
      top: 'toggle',
      opacity: 'toggle'
    });
    $("#backgroundDisable").toggle();
  }

  getViewMode(mode){
    this.viewMode = mode;
  }
}

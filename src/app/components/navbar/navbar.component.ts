import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
declare var $ :any;

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input("mode") viewMode:string;

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

  @Output("viewRequest") myViewReq = new EventEmitter<string>();

  setViewMode(mode:string){
    this.myViewReq.emit(mode);
  }
}

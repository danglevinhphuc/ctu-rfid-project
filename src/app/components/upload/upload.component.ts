import { Component, OnInit } from '@angular/core';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';
declare var $ :any;

@Component({
  selector: '[app-upload]',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  chooseFile:string = 'Choose a file...';

  constructor() {
    
   }
   upfile(e){
    let val:string = e.target.value;
    let n = val.lastIndexOf("\\");
    let m = val.lastIndexOf("\.");
    let extFile = val.slice(m,val.length);    
    if(extFile !== ".xlsx" && extFile !== ".xls"){
      alert("Bạn phải chọn file Excel.");
      e.target.value = '';
      console.log(e);
    } else{
      this.chooseFile = val.slice(n+1, val.length);
    }
   }

  ngOnInit() {
  }

  files:any[] = [];
 
  public dropped(event) {
    this.files = event.files;
    for (var file of event.files) {
      file.fileEntry.file(info => {
        console.log(info);
      });
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }


}
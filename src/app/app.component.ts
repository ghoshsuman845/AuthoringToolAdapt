import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() addcourse = new EventEmitter<string>();

  title = 'learning-tool';
  data:string;
  ArticleData: string;
  blockData: string;
  page:string;
  dataset: string;
  textData: string;
  course: string;
  constructor(private layoutService:LayoutService) { }
  

  sendData(){
    this.course = localStorage.getItem('course')
    this.page=localStorage.getItem("page");
    console.log("getting data on clicking priview button",this.course);
    this.layoutService.PageContentAdded.next(this.course);
  }
  addCourse(){
    console.log('add new clicked');
    //let course1 = JSON.parse(localStorage.getItem('course'));
  //  console.log(course1);
    this.layoutService.courseAdded.next();
  }
}


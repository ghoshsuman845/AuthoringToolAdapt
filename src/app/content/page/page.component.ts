import { Component, OnInit } from '@angular/core';
//import{Page} from 'src/app/models/page.model'
import {LayoutService } from 'src/app/services/layout.service';

import { Page } from 'src/app/models/page.model';
import { UUID } from 'angular2-uuid';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
  myPageForm:FormGroup
  courseObject:[];
  pageObject:any
  course:string;
  course_1:string;
  page:any;
  pages:any;
  page1:string;
  object:any;
  a1:any;

  constructor(private formBuilder: FormBuilder,private layoutService:LayoutService) { }

  ngOnInit() {

    this.myPageForm= this.formBuilder.group({
      title: [''],
      displayTitle: [''],
      body: [''],
      pageBody:[''],
      instruction:[''],
      btnlinkText:[''],
      duration:['']
      })

      this.
      myPageForm.
      valueChanges.
      subscribe(form1 => {
        localStorage.setItem('form1', JSON.stringify(form1));
      });

    let formValues = localStorage.getItem('form1');

if (formValues) {
     this.applyFormValues(this.myPageForm, JSON.parse(formValues));
  }else{
formValues= '';
  }

  }
  private applyFormValues (group, formValues) {
    Object.keys(formValues).forEach(key => {
      let formControl = <FormControl>group.controls[key];

      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      } else {
        formControl.setValue(formValues[key]);
      }
    });
  }
  SubmitItem() {

  //  this.layoutService.addPage(myForm.value);
  //  console.log(JSON.stringify(myForm.value));
  //  localStorage.setItem("PageItem",JSON.stringify(myForm.value));

  this.layoutService.addPage(this.myPageForm.value);
  localStorage.setItem("PageItem",JSON.stringify(this.myPageForm.value));
   this.course=localStorage.getItem('course')
    console.log(JSON.parse(this.course));
    this.course_1=JSON.parse(this.course)
    console.log("course",this.course_1)
    this.pages=this.course_1
    console.log("pages",this.pages);
    this.page=this.pages[0]._childInfo
    console.log("page",this.page);
   this.a1=this.page;
    console.log("a1",this.a1)
    
    
 if(this.page==[])
 {
 this.layoutService.addPage(this.myPageForm.value);
 localStorage.setItem("PageItem",JSON.stringify(this.myPageForm.value));
 }
else
 {

  this.object={
    _pageid: UUID.UUID(),
    _type: 'Page',
    _parentId:this.pages[0]._courseid, 
    title:this.myPageForm.value.title,
    displayTitle:this.myPageForm.value.displayTitle,
    body:this.myPageForm.value.body,
    pageBody:this.myPageForm.value.pageBody,
    instruction:this.myPageForm.value.instruction,
    btnlinkText:this.myPageForm.value.btnlinkText,
    duration:this.myPageForm.value.duration}
   
    this.a1.push(this.object)
this.page.push( this.a1)
    
   
   console.log("page1",this.a1)
 //  this.layoutService.addPage(this.page);
 //}
//this.page[1]=myForm.value
//console.log("page1[0]",this.page[1])
//this.page.push(this.page[1])
    // }
    //this.layoutService.addPage(myForm.value);
   // console.log(JSON.stringify(myForm.value));

    

   // const course = JSON.parse(localStorage.getItem("course"));

    // tslint:disable-next-line:prefer-for-of
  // for (let i = 0; i < course.length; i++) {
     //  course[i]._childInfo = myForm.value;
//}
    //localStorage.setItem("course", JSON.stringify(course));  //put the object back
    
  //  localStorage.setItem("PageItem",JSON.stringify(this.myPageForm.value));
    
    // return JSON.stringify(this.model);

   // const data = JSON.parse(localStorage.getItem("PageItem"));
    
   // console.log(data.title);
 
   // data[0].childinfo._parentid.push(data[0]._courseid)
 }

  }
}

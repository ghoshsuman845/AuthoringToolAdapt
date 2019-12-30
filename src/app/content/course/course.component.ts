import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import{Course} from 'src/app/models/course.model'
import {ActivatedRoute,Router} from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  myCourseForm:FormGroup

  get course() :   Course[] {
    return this.layoutService.course;
  
  }

  


  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Custom"},
      {id: 1, name: "Lock Last"},
      {id: 2, name: "Unlock First"},
      {id: 3, name: "Sequential"}
  ];

 
  constructor(private formBuilder: FormBuilder,private _route:ActivatedRoute,private router:Router,private layoutService: LayoutService) {
    }
  
  ngOnInit() {
  
    

    this.myCourseForm= this.formBuilder.group({
      title: [''],
      displayTitle: [''],
      description: [''],
      body:[''],
      tags:[''],
      checkbox:[''],
      user:['']
      })
    
      this.
      myCourseForm.
      valueChanges.
      subscribe(form => {
        localStorage.setItem('form', JSON.stringify(form));
      });

    let formValues = localStorage.getItem('form');

if (formValues) {
     this.applyFormValues(this.myCourseForm, JSON.parse(formValues));
  }else{
formValues= '';
  }
    //var array = JSON.parse(localStorage.getItem('course'));
   // var title=array[0].title;
 //   var desc=array[0].description;
  //  var id=array[0]._courseid;
   
 //   console.log(title)
 //  console.log(id);
   
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

 var retrieverObject = localStorage.getItem('course');
 if(retrieverObject==null){
  var retrieveObject=[]
  this.layoutService.addCourses(this.myCourseForm.value);
 }
 else{
 retrieveObject = JSON.parse(retrieverObject);
 var length = retrieveObject.length;
 var  courseid=retrieveObject[0]._courseid
   
      
      for (var i = 0; i < length; i++)    {
        if(retrieveObject[i]._courseid==courseid){
          retrieveObject[i].title=this.myCourseForm.value.title;
          retrieveObject[i].displayTitle=this.myCourseForm.value.displayTitle;
          retrieveObject[i].checkbox=this.myCourseForm.value.checkbox;
          retrieveObject[i].tags=this.myCourseForm.value.tags;
          retrieveObject[i].body=this.myCourseForm.value.body;
          retrieveObject[i].user=this.myCourseForm.value.user;
      
          retrieveObject[i].description=this.myCourseForm.value.description;
        console.log(retrieveObject[i].title)
        console.log(retrieveObject);
        localStorage.setItem('course',JSON.stringify(retrieveObject))
        }
       
      }
     
   
   
      // retrieveObject[i].checkbox=this.myCourseForm.value.checkbox;
      // retrieveObject[i].tags=this.myCourseForm.value.tags;
         // update the entry in the array
         
      } 
 

  
}
 destroyFormValues() {
  localStorage.removeItem('form');
   alert('Saved form data deleted');
 }
 selected(){
  console.log(this.selectedLevel.name)
}

}

import { Injectable } from '@angular/core';
import {SCORM} from 'pipwerks-scorm-api-wrapper';
 
@Injectable({
  providedIn: 'root'
})
export class ScormService {
  scorm:string;
  lmsConnected = false;
  name:any;
  completionstatus: any;
 
  constructor() { }
  ngOnInit() {
    console.log('scorm service');
    this.lmsConnected = false;
   
 }
 
 handleError(msg){
  alert(msg);
  // window.close();
}

 initCourse(){
   console.log('initcourse');
  
   
     //scorm.init returns a boolean
     this.lmsConnected = SCORM.init();

    
 //If the scorm.init function succeeded...
 if(this.lmsConnected){
   console.log('connected');
   

  //Let's get the completion status to see if the course has already been completed
  var completionstatus = SCORM.get("cmi.core.lesson_status");

  //If the course has already been completed...
  if(completionstatus == "completed" || completionstatus == "passed"){

     //...let's display a message and close the browser window
     this.handleError("You have already completed this course. You do not need to continue.");

  }

  //Now let's get the username from the LMS
  var learnername = SCORM.get("cmi.core.student_name");

  //If the name was successfully retrieved...
  if(learnername){  

     //...let's display the username in a page element named "learnername"
     document.getElementById("learnername").innerHTML = learnername; 
     console.log('learnername',learnername);
     //use the name in the form

  }

//If the course couldn't connect to the LMS for some reason...
} else {

  //... let's alert the user then close the window.
  this.handleError("Error: Course could not connect with the LMS");

}

 }
}

import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 visible:boolean = false;
 courses = [
  {"number": "Course 1"}
];
  Course: any;
  constructor(private layoutService:LayoutService) { }

  ngOnInit() {
const course1 = JSON.parse(localStorage.getItem("course"));
console.log(course1);

if(localStorage.getItem('courses')==null){
    this.courses.push({"number": "Course " + (this.courses.length + 1)})
    localStorage.setItem('courses',JSON.stringify(this.courses));
  } else {
    this.courses=JSON.parse(localStorage.getItem('courses'));
  }

this.layoutService.courseAdded.subscribe((courses)=>{
        this.courses.push({"number": "Course " + (this.courses.length + 1)})
        localStorage.setItem('courses',JSON.stringify(this.courses))
          // var tags =  [{ "id": 1, "name": "python" }, { "id": 2, "name": "NodeJs" }, { "id": 3, "name": "git" }]
    var tags=JSON.parse(localStorage.getItem("course"));
    //var selectedExpTags = [1,2];
    
  //  var selectedExpTags = this.courses;
    
    // Make a map for `id: name`
      //  var tagMap = tags.reduce(function(map, tag) {
     // map[tag._courseid] = tag.title;
     // return map;
    //}, {});
    
    // Quickly select names from the map:
  // var selectedNames = selectedExpTags.map(function(number) {
  //    return tagMap[number];
   // });
    
    //    console.log(selectedNames);
})


  }
  showList(){
    console.log("show list");
    this.visible= !this.visible;
    
  }
  showGrid(){
    console.log("show grid");
    this.visible= this.visible;
    
  }
  addCourse($event){
    this.Course = $event;
    console.log("this.Course",this.Course);
    this.addNewCourse();
  }
  addNewCourse(){
    this.courses.push({"number": "Course " + (this.courses.length + 1)})

  }
  deleteCourse(number: string){
    this.courses.splice(this.courses.findIndex( (course)  =>  course.number === number ), 1 );
      localStorage.setItem('courses',JSON.stringify(this.courses))

  }

}

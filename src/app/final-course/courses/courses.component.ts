import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit ,OnChanges{
  @Input() courseContent:string[];
  @Input() pageContent:string[];
  pages:string;
 
  show:boolean =false;
  course: string;
  page: string;
  page1: string;
  article: string;
  articles: string;
  block: string;
  blocks: string;
  component: string;
  components: string;
  courseObject: string;
  //newCourse: { _course: string; _page: string; _article: string; _block: string; _component: string; };

  constructor(private layoutService: LayoutService , private router: Router) { }

  ngOnInit() {
    console.log('courses');
    
    
    this.layoutService.PageContentAdded.subscribe((data)=>{
      if(data){
        console.log("courses",data)
        console.log("this is the data that comes in final-course.ts",data);
        console.log(typeof data);
        this.course = typeof(data)==='string'? JSON.parse(data): data;
        console.log('this.course',this.course); //COURSE
        this.page =this.course[0];
        console.log('page',this.page['_childInfo']);
        this.page1 = this.page['_childInfo'];
        console.log("page1", this.page1[0]); 
        this.pages = this.page1[0]; //PAGE
        this.article = this.pages['_childInfo'];
        this.articles = this.article[0]; //ARTICLE
        console.log('this.articles',this.articles);
        this.block = this.articles['_childInfo'];
        this.blocks=this.block[0];
        console.log('this.blocks',this.blocks);//BLOCK
        
        this.component =this.blocks['_childInfo'];
        console.log('this.component',this.component);
        this.components= this.component[0];
        console.log('this.components',this.components);//Component
       
        
 
        
      }else{
        console.log("No page array found");
      }     
  });
  }

  goToPage(){

  
    //  this.course = localStorage.getItem('course')
    //  this.page=localStorage.getItem("page");
     // console.log("getting data on clicking priview button",this.course);
      //this.layoutService.PageContentAdded.next(this.course);
  
   // console.log('click view button');
    //this.show = !this.show;
    // this.courseObject = localStorage.getItem('PageItem');
    // console.log('this.courseObject',this.courseObject);
    
    // this.layoutService.PageAdded.next(this.courseObject);
    
      this.router.navigate(['/final-course/course-object']);
   
  }
  ngOnChanges(){
    console.log("courseContent",this.courseContent);
    
  }
}

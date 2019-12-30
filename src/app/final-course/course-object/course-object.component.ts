import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-course-object',
  templateUrl: './course-object.component.html',
  styleUrls: ['./course-object.component.scss']
})
export class CourseObjectComponent implements OnInit {
  @Input() pageContent:string[];
  @Input() articleContent:string[];
  @Input() blockContent:string[];
  @Input() textContent:string[];
  @Input() graphicsContent:string[];
  @Input() inputTextContent:string[];

  pages:string;
 
  course_1:string
  course: string;
  page: any;
  page1: any;
  article: string;
  articles: string;
  block: string;
  title1:any;
  blocks: string;
  component: string;
  components: string;
  newCourse:{};
  articleIndex: string;
  blockIndex: any;
  blockIndex1: any;
  componentIndex: any;
  componentIndex1: any;
  graphicComponent: any;
  mainComponent: any;


  constructor(private layoutService: LayoutService) { 
    
  }

  ngOnInit() {
    console.log('course-object');
    this.course=localStorage.getItem('course')
    console.log(JSON.parse(this.course));
    this.course_1=JSON.parse(this.course)
    console.log("course",this.course_1)
    this.page=this.course_1[0]
    console.log("page",this.page._childInfo);
    this.page1=this.page._childInfo;
    console.log("page1",this.page1)
    this.article=this.page1[0]._childInfo
    console.log("article",this.article)
    this.blockIndex1=this.article[0]
    console.log("block1",this.blockIndex1)
    this.block=this.blockIndex1._childInfo
    console.log("block",this.block)
   this.componentIndex1=this.block[0]
   this.mainComponent=this.componentIndex1._childInfo[0]
   console.log("text component",this.mainComponent)
    this.components=this.componentIndex1._childInfo[1]
    console.log("graphicComponent",this.components)
    this.component=this.componentIndex1._childInfo[2]
    console.log("input text Component",this.component)

  }
  }



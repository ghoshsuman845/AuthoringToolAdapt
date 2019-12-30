import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { ScormService } from '../services/scorm.service';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {SCORM} from 'pipwerks-scorm-api-wrapper';
 @Component({
  selector: 'app-final-course',
  templateUrl: './final-course.component.html',
  styleUrls: ['./final-course.component.scss']
})
export class FinalCourseComponent implements OnInit {
  pages:string;
 
  
  course: string;
  page: string;
  page1: string;
  article: string;
  articles: string;
  block: string;
  blocks: string;
  component: string;
  components: string;
  newCourse:{};
  scorm:string;

  constructor(private layoutService: LayoutService, private scormService : ScormService,private _http: HttpClient) { this.loadXML(); }
  

  ngOnInit() {
    console.log('final course');
   
    

    // let objToBeShred = {
    //   course: this.course,
    //   page:this.page,

    // }
    
    
    this.layoutService.PageContentAdded.subscribe((data)=>{
      // this.page=  this.pageContent.push(data);
      if(data){
        console.log("final-courses",data)
        console.log("this is the data that comes in final-course.ts",data);
        console.log(typeof data);
        this.course = typeof(data)==='string'? JSON.parse(data): data;
        console.log('this.course',this.course); //COURSE
        this.page =this.course[0];
        // console.log('page',this.page['_childInfo']);
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
        this.newCourse ={
          _course : this.course[0],
          _page :this.pages,
          _article :this.articles,
          _block:this.blocks,
          _component :this.components
        
    
        }
        console.log('Final',this.newCourse);
        this.scormService.initCourse();
        // console.log('scormservice',this.scormService.initCourse());
        
        

        
        
        

        // this.pages = typeof(data)==='string'? JSON.parse(data): data;
        // console.log("this.pages",this.pages);
        
        
        // this.articleIndex=this.pages[0];
        // console.log("article index",this.articleIndex['_childInfo']);
        //   this.blockIndex =this.articleIndex['_childInfo'];
        // console.log("block index",this.blockIndex[0]);   // PAGE
        // this.blockIndex1 =this.blockIndex[0];
        // console.log("block index 1",this.blockIndex1['_childInfo']);
  
        // this.componentIndex =this.blockIndex1['_childInfo'];
        // console.log("component index",this.componentIndex[0]); //ARTICLE
        // this.componentIndex1 =this.componentIndex[0];
        // console.log("component index 1",this.componentIndex1['_childInfo']);
        // this.mainComponent = this.componentIndex1['_childInfo'];
        // console.log("mainComponent",this.mainComponent[0]); //BLOCK
        // this.mainComponent1 = this.mainComponent[0];
      
        // console.log(typeof this.pages);
      }else{
        console.log("No page array found");
      }
      
      
         
  });
  }
  loadXML() {
    this._http.get('/assets/imsmanifest.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      });
    }

}

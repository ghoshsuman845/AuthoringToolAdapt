import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UUID } from 'angular2-uuid';
import { Course } from '../models/course.model';
import { Page } from '../models/page.model';
import { Article } from '../models/article.model';
import { Block } from '../models/block.model';
import { Subject } from 'rxjs';
import { Graphics } from '../models/components/graphics.model';
import { TextBox} from '../models/components/text-box.model';
import { InputBox } from '../models/components/input-box.model';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public course :Course[] =[];
  public page: Page[] = [];
  public article:Article[] = [];
  public block:Block[]=[];
  public textBox: TextBox[]=[];
  public graphics : Graphics[]=[];
  public inputbox: InputBox[]=[];

  PageContentAdded = new Subject();
  PageAdded = new Subject();
  courseAdded= new Subject();
  public data;


  constructor(public http:HttpClient) { }
  getPageLocation(): Array<any> {
    const pageLocation = [

{ path: './dashboard', 
name: 'Dashboard' ,
},

{ path: './editor-pane', 
name: 'Page Structure' ,
},
{ path: './page-structure', 
name: 'Course Structure' ,
},

{path: './content', 
name: 'Settings',
children: [
  {path: './page', name: 'Page Settings'},
  {path: './article', name: 'Article Settings'}, 
  {path: './block', name: 'Block Settings'}, 
  {path: './course', name: 'Course Settings'},
 
]
},

{path: './final-course', 
name: 'Final Course',
children: [
  {path: './pages', name: 'Page '},
  {path: './course-object', name: 'Course-Object '},
  {path: './article', name: 'Article '},
  {path: './courses', name: 'Course '},
  {path: './blocks', name: 'Block '},
 
]
},

{path: './component-content', 
name: 'Component Settings',
children: [
  {path: './graphics', name: 'Graphics'},
  { path:'./input-textbox', name: 'InputBox'},
  {path: './text-box', name: 'TextBox'}
]
}, 

    ];
    return pageLocation;
  }
 
  

  
  addCourses(value):void {

    this.course.push({
      _courseid: UUID.UUID(),
      _type:"course",
      title: value.title !=''? value.title : 'not specified',
      displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
      description: value.description !=''? value.description : 'not specified',
      body: value.body ,
      tags:value.tags !=''? value.tags : 'not specified',
      lockType:value.lockType !=''? value.lockType : 'not specified',
     _childInfo:this.page,
      customCSS: value.customCSS !=''? value.customCSS : 'not specified',
    });
  //  console.log("course", this.course);
  localStorage.setItem("course",JSON.stringify(this.course));

  }


  addPage(value):void{

    const data = JSON.parse(localStorage.getItem("course"));
   
 //console.log(data[0]._childInfo[0]);

    this.page.push({
      _pageid: UUID.UUID(),
      _type: 'Page',
     // _parentId:value._parentId !=''? value._parentId : 'not specified', 
     _parentId:data[0]._courseid, 
      title: value.title !=''? value.title : 'not specified',
      displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
      body: '<div>' + value.body + '</div>' ,
      pageBody: '<div>' + value.pageBody + '</div>' ,
      instruction: value.instruction !=''? value.instruction : 'not specified',
      btnlinkText:value.btnlinkText !=''? value.btnlinkText : 'not specified',
      duration: value.duration !=''? value.duration : 'not specified',
      _childInfo: this.article,
      _pageLevelProgressEnabled: value._pageLevelProgressEnabled !=''? value._pageLevelProgressEnabled : 'not specified',
    });
    console.log("page", this.page);
    localStorage.setItem("course",JSON.stringify(this.course));
 }
  addArticle(value):void{
    const data = JSON.parse(localStorage.getItem("course"));
     console.log(data[0]._childInfo[0]._pageid);

    this.article.push({
      _articleid: UUID.UUID(),
      _parentId:data[0]._childInfo[0]._pageid, 
      _type: 'Article',
      _classes: value._classes !=''? value._classes : 'not specified',
      title: value.title !=''? value.title : 'not specified',
      displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
      body: '<div>' + value.body + '</div>',
      _childInfo: this.block,
      instruction: value.instruction !=''? value.instruction : 'not specified',
    });
    console.log("article", this.article)
  }

  uploadFileToStorage(imageObj) {
    // const formData: FormData = new FormData();
    // formData.append('image', file);
    // console.log("appended to form data");
    // console.log(file);
    return this.http.post<any>(`https://igaapi.azurewebsites.net/api/user/upload`, imageObj);
  }

  addText(value):void{
    this.textBox.push({
      title: value.title !=''? value.title : 'not specified',
      dtitle: value.dtitle !=''? value.dtitle : 'not specified',
      body: '<div>' + value.body + '</div>',
      _type:'Text Component',
      _parentId:value._parentId !=''? value._parentId : 'not specified',
    });
    console.log("textbox", this.textBox);
    console.log("type text", this.textBox[0]._type);
    
    localStorage.setItem("course",JSON.stringify(this.course));

    
}

addGraphics(value):void{
  
  this.graphics.push({
    _graphicsid: UUID.UUID(),
    _parentId:value._parentId !=''? value._parentId : 'not specified',
    body:  value.body ,
    _type:'Graphics Component',
    title:value.title !=''? value.title : 'not specified',
    displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
    instruction : value.instruction !=''? value.instruction : 'not specified',
   graphics_url: value.graphics_url!=''? value.graphics_url : 'not specified',

  });
  console.log("graphics", this.graphics);
  localStorage.setItem("course",JSON.stringify(this.course));

  
}
addInputBox(value):void{
  this.inputbox.push({
  _id: UUID.UUID(), 
  title: value.title !=''? value.title : 'not specified',
  displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
  body: value.body !=''? value.body : 'not specified',
  instruction:value.instruction !=''? value.instruction : 'not specified',
  _type:"Input Box",
  _classes: value._classes !=''? value._classes : 'not specified',
  _answers :value._answers !=''? value._answers : 'not specified',
  _feedback:value._feedback !=''? value._feedback : 'not specified',


  });
  console.log("inputbox", this.inputbox);
  localStorage.setItem("course",JSON.stringify(this.course));
  

}




addBlock(value):void{
  console.log(value,'block component')
  
  this.block.push({
    _blockid: UUID.UUID(),
    _parentId:value._parentId !=''? value._parentId : 'not specified', 
    _classes: value._classes !=''? value._classes : 'not specified',
    title: value.title !=''? value.title : 'not specified',
    displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
    body: '<div>' + value.body + '</div>',
    _type:'block',
    _trackingId: 1,
    instruction: value.instruction !=''? value.instruction : 'not specified',
    _childInfo: [this.textBox,this.graphics, this.inputbox]
  });
  console.log("block", this.block);
  
  
}
}

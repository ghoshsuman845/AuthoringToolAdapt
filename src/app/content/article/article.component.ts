import { Component, OnInit } from '@angular/core';
import {LayoutService } from 'src/app/services/layout.service';
import { Article } from 'src/app/models/article.model';
import { Articles } from './../../models/articles.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  get article() :   Article[] {
    return this.layoutService.article;
  
  }

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {

   
  }
  SubmitItem(myArticleForm:HTMLInputElement) {

    //const data = JSON.parse(localStorage.getItem("course"));

    // console.log(data[0]._courseid);

  //data[0].childinfo._parentid.push(data[0]._courseid)

   // localStorage.setItem("CourseItems",JSON.stringify(myCourseForm.value));
 // return JSON.stringify(this.model);



    const course = JSON.parse(localStorage.getItem("course"));
    this.layoutService.addArticle(myArticleForm.value);
   console.log(JSON.stringify(myArticleForm.value));
  
    var article = JSON.parse(localStorage.getItem("ArticleItem")) || [];
    article.push(JSON.stringify(myArticleForm.value));
    localStorage.setItem("ArticleItem", JSON.stringify(article));
 // return JSON.stringify(this.model);
  
  
 }

}

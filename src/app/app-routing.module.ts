import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { CourseComponent } from './content/course/course.component';
import { PageComponent } from './content/page/page.component';
import { ArticleComponent } from './content/article/article.component';
import { BlockComponent } from './content/block/block.component';
import { ComponentContentComponent } from './component-content/component-content.component';
import { GraphicsComponent } from './component-content/graphics/graphics.component';
import { TextBoxComponent } from './component-content/text-box/text-box.component';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { EditorPaneComponent } from './editor-pane/editor-pane.component';
import { ComponentSidebarComponent } from './component-sidebar/component-sidebar.component';
import { FinalCourseComponent } from './final-course/final-course.component';
import { PagesComponent } from './final-course/pages/pages.component';
import { ArticlesComponent } from './final-course/articles/articles.component';
import { BlocksComponent } from './final-course/blocks/blocks.component';
import { ComponentsComponent } from './final-course/components/components.component';
import { CoursesComponent } from './final-course/courses/courses.component';
import { GraphicComponent } from './final-course/components/graphic/graphic.component';
import { TextComponent } from './final-course/components/text/text.component';
import { CourseObjectComponent } from './final-course/course-object/course-object.component';
import { MultiplechoicesComponent } from './component-content/multiplechoices/multiplechoices.component';
import { MultiplechoiceComponent } from './final-course/components/multiplechoice/multiplechoice.component';
import { InputTextComponent } from './final-course/components/input-text/input-text.component';
import { MatchingComponent } from './final-course/components/matching/matching.component';
import { InputTextboxComponent } from './component-content/input-textbox/input-textbox.component';
import { MatchingQaComponent } from './component-content/matching-qa/matching-qa.component';






const routes: Routes = [
{ path: '',redirectTo: '/dashboard',pathMatch: 'full'},

{ path: 'dashboard', 
component: DashboardComponent ,
},
{ path: 'component-sidebar', 
component: ComponentSidebarComponent ,
},
{ path: 'editor-pane', 
component: EditorPaneComponent ,
},
{ path: 'page-structure', 
component: PageStructureComponent ,
},
{ path: 'course-object', 
component: CourseObjectComponent ,
},

{path: 'content', 
component: ContentComponent,
children: [
  {path: 'page', component: PageComponent},
  {path: 'article', component: ArticleComponent}, 
  {path: 'block', component: BlockComponent}, 
  {path: 'course', component: CourseComponent},
 
]
},

{path: 'final-course', 
component: FinalCourseComponent,
children: [
  {path: 'pages', component: PagesComponent},
  {path: 'articles', component: ArticlesComponent}, 
  {path: 'blocks', component: BlocksComponent}, 
  {path: 'courses', component: CoursesComponent},
  {path: 'course-object', component: CourseObjectComponent},
  {path: 'components', component: ComponentsComponent,
  children:[
    {path:'graphic',component:GraphicComponent},
    {path:'text',component:TextComponent},
    {path:'multiple-choice',component:MultiplechoiceComponent},
    {path:'input-text',component:InputTextComponent},
    {path:'matching',component:MatchingComponent},





  ]
}, 
 
]
},

{path: 'component-content', 
component: ComponentContentComponent,
children: [
  {path: 'graphics', component: GraphicsComponent},
  {path: 'text-box', component: TextBoxComponent}, 
  {path: 'multiple-choices', component: MultiplechoicesComponent}, 
  {path: 'input-textbox', component: InputTextboxComponent}, 
  {path: 'matchingqa', component: MatchingQaComponent}, 
]
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

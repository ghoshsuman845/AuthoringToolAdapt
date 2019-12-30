import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.scss']
})
export class PageStructureComponent implements OnInit {
  pages = [
    {"number": "Page 1"}
]
  page_no: number;

  constructor() { }

  ngOnInit() {
  }
  addPage(){
   
    this.page_no=this.pages.push({"number": "Page " + (this.pages.length + 1)});
    console.log(JSON.stringify(this.page_no));
    
   }
   
   deletePage(number: string){
    console.log(number);
        
    this.pages.splice(this.pages.findIndex( (page)  =>  page.number === number ), 1 );

  }

}

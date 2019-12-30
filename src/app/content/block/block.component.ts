import { Component, OnInit } from '@angular/core';
import {LayoutService } from 'src/app/services/layout.service';
import{Block} from 'src/app/models/block.model'


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  get block() :   Block[] {
    return this.layoutService.block;
  }
  constructor(private layoutService:LayoutService) { }

  ngOnInit() {

    
  }
  SubmitItem(myBlockForm:HTMLInputElement) {
    this.layoutService.addBlock(myBlockForm.value);
    console.log(JSON.stringify(myBlockForm.value));
   localStorage.setItem("BlockItem",JSON.stringify(myBlockForm.value));
   //return JSON.stringify(this.model);
  
 //var block = JSON.parse(localStorage.getItem("BlockItem")) || [];
 
 //block.push(JSON.stringify(myBlockForm.value));
 //localStorage.setItem("BlockItem", JSON.stringify(block));
  
 }

}

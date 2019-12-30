import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { TextBox } from 'src/app/models/components/text-box.model';
@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
 


  get textbox() :   TextBox[] {
    return this.layoutService.textBox;
  
  }
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  SubmitItem(textForm:HTMLInputElement) {
    console.log(textForm.value)
    this.layoutService.addText(textForm.value);
   console.log(JSON.stringify(textForm.value));
  // localStorage.setItem("TextboxComponentItem",JSON.stringify(textForm.value));
  }
  
 
}

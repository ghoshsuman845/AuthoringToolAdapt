import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { InputBox } from 'src/app/models/components/input-box.model';


@Component({
  selector: 'app-input-textbox',
  templateUrl: './input-textbox.component.html',
  styleUrls: ['./input-textbox.component.scss']
})
export class InputTextboxComponent implements OnInit {
  get inputbox(): InputBox[] {
    return this.layoutService.inputbox;
  
  }

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }
  SubmitItem(inputTextCompForm:HTMLInputElement) {
    console.log(inputTextCompForm.value)
    this.layoutService.addInputBox(inputTextCompForm.value);
   console.log(JSON.stringify(inputTextCompForm.value));
  localStorage.setItem("InputboxComponentItem",JSON.stringify(inputTextCompForm.value));
  }
  

}

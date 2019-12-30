import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-sidebar',
  templateUrl: './component-sidebar.component.html',
  styleUrls: ['./component-sidebar.component.scss']
})
export class ComponentSidebarComponent implements OnInit {
  @Output() addComponent = new EventEmitter<string>();
  isShow: boolean = true;
  graphicComp :string = 'Graphics';
  textComp :string = 'Text';
  inputTextComp:string = 'TextInput';
  multipleChoiceComp:string= 'MultipleChoice';
  matchingComp :string='Matching';

  constructor() { }

  ngOnInit() {
  }
  hideComponentbar(){
    this.isShow= !this.isShow;
  }
  addGraphics(){
    this.addComponent.emit(this.graphicComp);


  }
  addTextBox(){
    this.addComponent.emit(this.textComp);

  }
  addMatching(){
    this.addComponent.emit(this.matchingComp);

  }
  addTextInput(){
    this.addComponent.emit(this.inputTextComp);

  }
  addMultipleChoice(){
    this.addComponent.emit(this.multipleChoiceComp);

  }

}

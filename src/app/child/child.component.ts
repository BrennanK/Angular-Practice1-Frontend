import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayString:string;

  @Input() set stringValue(name: string)
  {
    this.displayString=name;
  }

  throwUpString:string;

  @Output() EventToss= new EventEmitter<string>();

  throwUp(answer:string)
  {
    console.log("Hit throwUp with "+ answer);

    this.EventToss.emit(answer);
  }



}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  thought:string;

  mess:string

  messDisplay(childMess:string)
  {
    this.mess=`Hopefully this will display the message: ${childMess}`;
  }
}

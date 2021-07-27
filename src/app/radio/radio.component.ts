import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  radioForm:FormGroup;

  radioValue:string="No type";

  onClicked(value)
  {
    this.radioValue=value;
  }

  ngOnInit(): void 
  {
    this.radioForm=this.formBuilder.group
    (
      {
        type:['',Validators.required]
      }
    );
  }

}

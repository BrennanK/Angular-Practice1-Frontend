import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent implements OnInit {

  testForm:FormGroup

  dateMonth:number=0;
  dateDay:number=0;
  dateYear:number=0;

  dropValue:string;
  maxValue:number;
  minValue:number;
  dateValue:Date;
  constructor(private formBuilder:FormBuilder) { 
    this.dateMonth=0;
    this.dateDay=0;
    this.dateYear=0;
  }

  ngOnInit(): void 
  {
    this.testForm=this.formBuilder.group
    (
      {
        drop:['',Validators.required],
        date:[null,this.dateValidator],
        max:[0,[Validators.max(200),Validators.min(7)]],
        min:[4,Validators.min(4)]
      }
    );
  }

  dateValidator(control:AbstractControl):{[key:string]:boolean} | null
  {
    let currentDate= new Date();
    let sampleDate= new Date(control.value);
    sampleDate.setDate(new Date(control.value).getDate()+1);
    if(currentDate.setHours(0,0,0,0)>=sampleDate.setHours(0,0,0,0))
    {
      console.log(sampleDate);
      //this.dateMonth=sampleDate.getMonth();
      //this.dateDay=sampleDate.getDate();
      //this.dateYear=sampleDate.getFullYear();
      return null;
    }
    else
    {
      console.log(sampleDate);
      return {'dateValidator': true};
    }
  }

  dateSet(date:Date)
  {
   // this.dateValue=date;
  }
}

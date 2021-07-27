import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ReviewService} from '../review.service';
import {PokemonGoModel} from '../PokemonGOModel'
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private reviewService:ReviewService) { }

  reviewForm:FormGroup;
  name:string;
  type:string;
  rank:number;

  created:PokemonGoModel;

  errorMessage:string;

  ngOnInit(): void {


    this.reviewForm=this.formbuilder.group
    (
      {
        name:['',Validators.required],
        type:['',Validators.required],
        rank:[0,[Validators.min(1),Validators.max(3)]]
      }
    );


  }

  click()
  {
    console.log("A sweet calamity");
    this.reviewService.createPokemon(new PokemonGoModel(this.name,this.rank,this.type)).subscribe(poke=>this.created=poke,err=>this.errorMessage=err);
  }

}

import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {PokemonServiceService} from '../pokemon-service.service';
import {PokemonGoModel} from '../PokemonGOModel';
@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  errorMessage:string;
  createdName:string;
  createdRank:number;
  createdType:string;

  createdPokemon:PokemonGoModel;

  createForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private createServ:PokemonServiceService) { }

  ngOnInit(): void {

    this.createForm=this.formBuilder.group
    (
      {
        name: ['',Validators.required],
        rank: [0,Validators.required],
        type: ['',Validators.required]
      }
    );

  }


  createPokemon()
  {
    let pokemon:PokemonGoModel=new PokemonGoModel(this.createdName,this.createdRank,this.createdType);
    this.createServ.createPokemon(pokemon).subscribe(poke=>this.createdPokemon=poke,message=>this.errorMessage=message);
  }
}

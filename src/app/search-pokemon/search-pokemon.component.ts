import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {PokemonServiceService} from '../pokemon-service.service';
import {PokemonGoModel} from '../PokemonGOModel';
@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  pokemon:PokemonGoModel;
  searchForm:FormGroup;
  element:string;
  constructor(private formBuilder:FormBuilder,private searchServ:PokemonServiceService) { }

  ngOnInit(): void {
    this.searchForm= this.formBuilder.group
    (
      {
        type:['',Validators.required]
      }
    )
  }

  setType(type:string)
  {
    this.searchServ.setType(type).subscribe(pokemon=>this.pokemon=pokemon);
  }
}

import { Component, OnInit } from '@angular/core';
import {PokemonGoModel} from '../PokemonGOModel';
import {PokemonServiceService} from '../pokemon-service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private pokeServ:PokemonServiceService) { }

  pokemon:PokemonGoModel[];
  showTable:boolean;

  revealTable()
  {
    this.pokeServ.getTableEntries().subscribe(p=> this.pokemon=p);
    this.showTable=true;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {PokemonServiceService} from '../pokemon-service.service';
import {PokemonGoModel} from '../PokemonGOModel';
@Component({
  selector: 'app-buttontest',
  templateUrl: './buttontest.component.html',
  styleUrls: ['./buttontest.component.css']
})
export class ButtontestComponent implements OnInit {

  content:PokemonGoModel=null;
  constructor(private buttService:PokemonServiceService) { }

  ngOnInit(): void {
  }

  getButtonPress()
  {
    //console.log("We hit button press");
    //this.content=this.buttService.getCall();

    this.buttService.getCall().subscribe(content=> this.content=content);
  }

  postButtonPress()
  {
    this.content=this.buttService.postCall();
  }

  putButtonPress()
  {
    this.content=this.buttService.putCall();
  }

  deleteButtonPress()
  {
    this.content=this.buttService.deleteCall();
  }
}

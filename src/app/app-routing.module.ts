import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtontestComponent} from '../app/buttontest/buttontest.component';
import {CreatePokemonComponent} from '../app/create-pokemon/create-pokemon.component';
import {SearchPokemonComponent} from '../app/search-pokemon/search-pokemon.component';
import {FormPracticeComponent} from './form-practice/form-practice.component';
import {ParentComponent} from './parent/parent.component';
import {RadioComponent} from './radio/radio.component';
import {TableComponent} from './table/table.component';
import {ReviewComponent} from './review/review.component';

const routes: Routes = [
  {path:'button', component:ButtontestComponent},
  {path:'',redirectTo:'/button',pathMatch:'full'},
  {path:'create',component:CreatePokemonComponent},
  {path:'search',component:SearchPokemonComponent},
  {path:'formpractice',component:FormPracticeComponent},
  {path: 'nest',component:ParentComponent},
  {path: 'radio',component:RadioComponent},
  {path: 'table',component:TableComponent},
  {path: 'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

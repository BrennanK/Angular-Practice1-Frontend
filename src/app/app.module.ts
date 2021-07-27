import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtontestComponent } from './buttontest/buttontest.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { DisplayPipePipe } from './display-pipe.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormPracticeComponent } from './form-practice/form-practice.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RadioComponent } from './radio/radio.component';
import { TableComponent } from './table/table.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtontestComponent,
    CreatePokemonComponent,
    SearchPokemonComponent,
    DisplayPipePipe,
    FormPracticeComponent,
    ChildComponent,
    ParentComponent,
    RadioComponent,
    TableComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

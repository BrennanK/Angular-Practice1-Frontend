import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import {PokemonGoModel} from '../app/PokemonGOModel';
@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }

  getCall():Observable<PokemonGoModel>
  {
    console.log(this.http.get<PokemonGoModel>("http://localhost:8021/PokemonGo/create/water"));
    return this.http.get<PokemonGoModel>("http://localhost:8021/PokemonGo/create/water");
  }

  getTableEntries():Observable<PokemonGoModel[]>
  {
    return this.http.get<PokemonGoModel[]>("http://localhost:8021/PokemonGo/array");
  }

  setType(type:string):Observable<PokemonGoModel>
  {
    return this.http.get<PokemonGoModel>("http://localhost:8021/PokemonGo/create/" + type).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse)
  {
    let errMsg='';
    if(err.error instanceof Error)
    {
      console.log('An error occured: ' + err.error.message);
      errMsg=err.error.message;
    }
    else
    {
      console.log(`Backend returned code ${err.status}`);
      errMsg=`Backend returned code ${err.status}`;
    }

    return throwError(errMsg);
  }

  createPokemon(pokemon:PokemonGoModel): Observable<PokemonGoModel>
  {
    const options= new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<PokemonGoModel>("http://localhost:8021/PokemonGo/return",pokemon,{headers:options}).pipe(catchError(this.handleError));
  }

  postCall()
  {
    return null;
  }

  putCall()
  {
    return null;
  }

  deleteCall()
  {
    return null;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PokemonGoModel} from './PokemonGOModel';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:8021/PokemonGo/return";
  
  createPokemon(obj):Observable<PokemonGoModel>
  {
    const headers:HttpHeaders= new HttpHeaders({"Content-Type":"application/json"});
    return this.http.post<PokemonGoModel>(this.url,obj,{headers:headers}).pipe(catchError(this.handleError));
  }

  private handleError(err:HttpErrorResponse)
  {
     let errMessage='';

     if(err instanceof Error)
     {
       errMessage="The error is of Type Error with the Message: "+ err.error.message;
     }
     else
     {
       errMessage=`The error code is ${err.status} with the message ${err.message}`;
     }

     return throwError(errMessage);
  }
}

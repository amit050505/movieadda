import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) {
    
   }

   getAllMovies()
   {
    return this._http.get<any>("http://starlord.hackerearth.com/movieslisting");
   }
}

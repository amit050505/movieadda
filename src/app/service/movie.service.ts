import { moviedata } from './../data/moviedata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public mData: any;

  constructor(private _http: HttpClient) {
    
   }

   getAllMovies()
   {
    // return this._http.get<any>("https://starlord.hackerearth.com/movieslisting");
   
    // return this._http.get<any>("http://localhost:3000/data");

    this.mData=moviedata;
    return this.mData;
    
   }
}

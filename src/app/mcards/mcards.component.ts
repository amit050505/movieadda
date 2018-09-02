import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-mcards',
  templateUrl: './mcards.component.html',
  styleUrls: ['./mcards.component.css']
})
export class McardsComponent implements OnInit {
@Input()
public movie:any;
@Output() 
public outputMovie = new EventEmitter();
// public detailsview: Boolean=false;
  constructor() { }

  ngOnInit() {
  }
  getMovieDetails(movie)
  {
    console.log(movie);
    // this.detailsview=true;
    this.outputMovie.emit(movie);
    
  }

}

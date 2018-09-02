import { MovieService } from './../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movies: any;
  public loading: Boolean = false;
  public selectedMovieForDetails:any;
  public movieDetailsDialog: Boolean = false;
  public searchText:string;

  constructor(private movieServ: MovieService) {
    this.getAllMovies();
   }

  ngOnInit() {
  }
  
  getAllMovies() { 
    //  this.loading=true;
    //   this.movieServ.getAllMovies().subscribe(
    //     data=>{
    //       this.movies= data;          
    //       this.loading=false;
    //       console.log(this.movies.length);
    //     }
    //   )
    this.movies=this.movieServ.getAllMovies();

  }

  getMovieDetails(movie)
  {      
      this.selectedMovieForDetails=movie;
      this.movieDetailsDialog=true;
  }

  getsplits(item)
   {
      return item.split("|");
   }

   closeDialog()
   {
     this.movieDetailsDialog=false;
   }

  

}

import { MovieService } from './../service/movie.service';
import { Component, OnInit, ElementRef, Renderer, ViewChild  } from '@angular/core';
import { take } from 'rxjs/operators';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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
  public totalItems = 500;
  public currentPage = 1;
  public maxSize=10;
  public itemsPerPage=16;
  public returnedArray:any;

  @ViewChild('fileInput') fileInput:ElementRef;

  constructor(private movieServ: MovieService, private renderer:Renderer) {
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
    //       this.totalItems=this.movies.length;
    //       this.returnedArray = this.movies.slice(0, this.itemsPerPage);
    //       console.log(this.movies.length);
    //     }
    //   )

    this.movies=this.movieServ.getAllMovies();
    this.totalItems=this.movies.length;
    this.returnedArray = this.movies.slice(0, this.itemsPerPage);

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

   pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * this.itemsPerPage;
    const endItem = event.page * this.itemsPerPage;
   
    console.log(startItem);
    console.log(endItem);
    
    this.returnedArray = this.movies.slice(startItem, endItem);
    // let scTop = new MouseEvent('click', {bubbles: true});
    // this.renderer.invokeElementMethod(
    //   this.fileInput.nativeElement, 'dispatchEvent', [event]);
    this.fileInput.nativeElement.click();
  }
}

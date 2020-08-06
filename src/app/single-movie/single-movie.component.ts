import { Component, OnInit, Input, } from '@angular/core';
import { Child } from '../models/child';
import { Parent } from 'src/app/models/parent'
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})

export class SingleMovieComponent implements OnInit {

  @Input() child: any;
  movie: any;

constructor(private movieService: MoviesService) { }

toggle: boolean = false; 

  ngOnInit()  {

  }

  addToFavorites(movie) {
    if (!this.toggle) {
      this.movieService.favoriteMovies.push(movie);
      this.toggle = true;
    } else {
      const movieIndex = this.movieService.favoriteMovies.indexOf(movie);
      this.movieService.favoriteMovies.splice(movieIndex, 1);
      this.toggle = false; 
    }
}

  setMovieDetails(movie: any) {
    return this.movieService.setMovieDetails(movie);
  }
  
}

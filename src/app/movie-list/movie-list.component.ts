import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Parent } from 'src/app/models/parent';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
constructor(private moviesService: MoviesService) { }

  ngOnInit() {

  }

  getMovies() {
    return this.moviesService.movies;
  }

}

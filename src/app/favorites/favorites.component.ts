import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  movie: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  getMovies() {
    return this.movieService.favoriteMovies;
  }

  removeFromFavorites(movie) {
    const itemIndex = this.movieService.favoriteMovies.indexOf(movie);
    this.movieService.favoriteMovies.splice(itemIndex, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Genre } from 'src/app/models/genre';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genre: Genre;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe((data: any) => {
      this.moviesService.genres = data.genres;
    });
  }

  formSubmitted(data: NgForm) {
    let actorName = data.value.actor;
    let parameters: any;
    let greaterThanRating = data.value.greaterThanRating;
    if (actorName.length > 0) {
      this.moviesService.getActors(actorName).subscribe((response: any) => {
        const actorIds = response.results ? response.results[0].id : '';
        if (greaterThanRating) {
          parameters = {
            genre: data.value.genre,
            year: data.value.year,
            greaterThanRating: data.value.rating,
            actorId: actorIds,
          };
        } else {
          parameters = {
            genre: data.value.genre,
            year: data.value.year,
            lessThanRating: data.value.rating,
            actorId: actorIds,
          };
        }
        this.moviesService
          .getMovies(parameters)
          .subscribe(this.onSuccess.bind(this), this.onError.bind(this));
      });
    } else {
      if (greaterThanRating) {
        parameters = {
          genre: data.value.genre,
          year: data.value.year,
          greaterThanRating: data.value.rating,
        };
      } else {
        parameters = {
          genre: data.value.genre,
          year: data.value.year,
          lessThanRating: data.value.rating,
        };
      }
      this.moviesService
        .getMovies(parameters)
        .subscribe(this.onSuccess.bind(this), this.onError.bind(this));
    }
  }
  onSuccess(data: any) {
    this.moviesService.movies = data.results;
  }

  onError(error: Error) {
    console.log(error.message);
  }

  getGenres() {
    return this.moviesService.genres;
  }

  next() {}
}

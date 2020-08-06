import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/models/genre';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  apiKey: string = '7d24a9906311e94df7a1bf45f4e60f2c';
  genre: number;
  movies: any; 
  genres: Genre[]; 
  year: number; 
  rating: number;
  movieDetails: any;
  //page: number = 1;
  actorId: any; 

  favoriteMovies: any[] = [];

  constructor(private http: HttpClient) { }

  getMovies(data: any): Observable<any> {
    // console.log(data);
    let parameters = {
      page: data.page ? data.page : '',
      primary_release_year: data.year ? data.year : '',
      "vote_average.gte": data.greaterThanRating ? data.greaterThanRating : '',
      "vote_average.lte": data.lessThanRating ? data.lessThanRating : '',
      api_key: this.apiKey,
      with_genres: data.genre ? data.genre : '',
      sort_by: data.sortBy ? data.sortBy : "popularity.desc",
      with_cast: data.actorId ? data.actorId : ''
    };
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', {params: parameters});
  }

  getGenres(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/genre/movie/list', {params: {api_key: this.apiKey}});
  }

  setMovieDetails(movie: any): any {
    this.movieDetails = movie;
  }
  
  getMovieDetails(): any {
    return this.movieDetails;
  }

  getActors(actor): Observable<any> {

    const parameters = {
      api_key: '7d24a9906311e94df7a1bf45f4e60f2c',
      query: actor ? actor : ""
    }
    return this.http.get<any>('https://api.themoviedb.org/3/search/person', {params:  parameters}); 
  }
}

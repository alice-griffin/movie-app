import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

details: any;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  constructor(private movieService: MoviesService) { }



  ngOnInit(): void {
    this.getMovieDetails();

  }
getMovieDetails(): any {
    this.details = this.movieService.getMovieDetails();
    console.log(this.details);
  }

}

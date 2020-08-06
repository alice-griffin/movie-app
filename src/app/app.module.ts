import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from '../app/movie-list/movie-list.component';
import { FavoritesComponent } from '../app/favorites/favorites.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  {path: 'home', component: MovieListComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '**', component: PagenotfoundComponent},
  {path: 'details', component: DetailsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    SingleMovieComponent,
    MovieListComponent,
    SearchCriteriaComponent,
    FavoritesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

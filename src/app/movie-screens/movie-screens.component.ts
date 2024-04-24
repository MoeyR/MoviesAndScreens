import { Component, Input } from '@angular/core';
import { MoviesInterface } from '../Interfaces/TheaterDetailsInterface';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-movie-screens',
  templateUrl: './movie-screens.component.html',
  styleUrls: ['./movie-screens.component.css']
})
export class MovieScreensComponent {
  @Input() fetchExternalMovieLists !: MoviesInterface[];

  showScreenData !: string;
  selectedMovieScreen !: MoviesInterface[];

  selectedScreen(val: number){
    this.showScreenData = `Movies in Screen Room ${val}`;
    this.selectedMovieScreen=[]
    this.fetchExternalMovieLists.filter(e=>{
      if(e.screen === val){
        this.selectedMovieScreen.push(e);
      }
    })
  }
}

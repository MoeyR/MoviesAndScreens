import { Component,Input} from '@angular/core';
import { MoviesInterface } from '../Interfaces/TheaterDetailsInterface';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.css']
})
export class ListOfMoviesComponent {
  @Input() fetchExternalMovieLists !: MoviesInterface[];
}

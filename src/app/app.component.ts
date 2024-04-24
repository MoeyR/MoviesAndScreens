import { Component } from '@angular/core';
import { PageInfo } from './Classes/PageInfo';
import {externalPageInfo} from '../assets/data/headerFooterData';
import theaterDetails from "../assets/data/theaterDetails.json";
import {TheaterDataInterface, MoviesInterface} from "./Interfaces/TheaterDetailsInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ranmA4App';

  pageData: PageInfo = externalPageInfo;
  theaterDetailsJson: TheaterDataInterface = theaterDetails.TheaterData;
  moviesJson: MoviesInterface[] = theaterDetails.Movies;
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './projectModules/header-footer/header-footer.module';
import { ListOfMoviesComponent } from './list-of-movies/list-of-movies.component';
import { MovieScreensComponent } from './movie-screens/movie-screens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './projectModules/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    ListOfMoviesComponent,
    MovieScreensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

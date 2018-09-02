import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './service/movie.service';
import { NavigationComponent } from './navigation/navigation.component';
import { McardsComponent } from './mcards/mcards.component';
import { MdetailsComponent } from './mdetails/mdetails.component';

import { MovieFilterPipe }from './pipes/filter.pipe';
import { InputsModule } from '@progress/kendo-angular-inputs';


const appRoutes: Routes = [     
  { path: 'movie', component: MovieComponent},
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: '**', redirectTo: 'movie' }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavigationComponent,
    McardsComponent,
    MdetailsComponent,
    MovieFilterPipe 
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    DialogsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpModule,
    DropDownsModule,
    InputsModule    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

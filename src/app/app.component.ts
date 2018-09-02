import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { timer, forkJoin } from 'rxjs';
import { take, concat, merge } from 'rxjs/operators';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent
} from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public responseData: any;
  public activeItems=[];

  constructor() {
  }

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '**',
    component: FlightComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    FlightComponent
  ]
})
export class FlightsModule { }

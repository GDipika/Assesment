import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types/types.component';
import { RouterModule, Routes } from '@angular/router';

const Routes: Routes = [
  { path: '', component: TypesComponent },
];


@NgModule({
  declarations: [
    TypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class DatabindingModule { }

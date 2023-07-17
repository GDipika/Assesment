import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { Child1Component } from './child1/child1.component';

export class items{
  id!:number;
  name!:string
}

const Routes: Routes = [
  { path: '', component:DirectivesComponent },
];

@NgModule({
  declarations: [DirectivesComponent, Child1Component],
  imports: [
  CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class TemplateModule { }

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraymethodsComponent } from './arraymethods/arraymethods.component';
import { Routes, RouterModule } from '@angular/router';

const Routes:Routes=[
  {path:'',component:ArraymethodsComponent}
]
export class items{
  id!:number;
  name!:string
}
@NgModule({
  declarations: [
    ArraymethodsComponent
  ],
  imports: [
    CommonModule,
  RouterModule.forChild(Routes)
  ]
})
export class JavascriptModule { }

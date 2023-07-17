import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const Routes: Routes = [
  { path: '', component: FormsComponent },
];


@NgModule({
  declarations: [
FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    ReactiveFormsModule
  ]
})
export class ReactivefromsModule { }

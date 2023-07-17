import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';

const Routes: Routes = [
  { path: '', component: OperatorsComponent },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class RxjsModule { }

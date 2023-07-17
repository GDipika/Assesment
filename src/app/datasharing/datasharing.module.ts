import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';

const Routes: Routes = [
  { path: '', component: ParentComponent },
];

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [CommonModule, RouterModule.forChild(Routes)],
})
export class DatasharingModule {
}

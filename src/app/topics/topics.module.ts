import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewparentComponent } from './viewparent/viewparent.component';

const Routes: Routes = [{ path: '', component: PipesComponent },
{ path: 'viewchild', component: ViewchildComponent },
{ path: 'viewparent', component: ViewparentComponent }
];

@NgModule({
  declarations: [PipesComponent, CustomPipe, ViewchildComponent, ViewparentComponent],
  imports: [CommonModule, RouterModule.forChild(Routes),ReactiveFormsModule],
})
export class TopicsModule {}

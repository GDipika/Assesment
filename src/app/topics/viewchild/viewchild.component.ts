import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewchildComponent {
  count = 0;
 
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }


  }


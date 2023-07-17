import { Component, EventEmitter, Input, Output } from '@angular/core';
import { items } from 'src/app/javascript/javascript.module';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  increment() {
    throw new Error('Method not implemented.');
  }
  decrement() {
    throw new Error('Method not implemented.');
  }
  interpolation =
    'It is a one way databinding technique used by angular to tranfer the data from modal to view';
  username = 'hgfg';
  count: any;
  
  value = ' Data is being transfered from child component to parent component';

  @Input() child: any;

  @Output() get = new EventEmitter();

  adduser() {
    this.get.emit(this.value);
  }


  items:items[]=[
    {id:1,name:'junnu'},
    {id:2,name:'junn1'},
    {id:3,name:'junn2'},
    {id:4,name:'junn3'},
  ]
  login=true;

  //databinding
  constructor() {}
  ngOnInit(): void {}
}

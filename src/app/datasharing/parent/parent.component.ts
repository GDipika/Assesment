import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  data1 = ['Hi,  from Parent component ,here the data is transfered from parent to child component'];
  // data2 = ['sharing data from parent to child by using @input decorator.'];

  username=''
  names = ['']
  adduser(names: any) {
    console.log(names)
    this.names.push(names);
  }
}

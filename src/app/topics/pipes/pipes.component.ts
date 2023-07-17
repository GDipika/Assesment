import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  pipes: string = 'pipes in angular';

  users: any[] = [
    { id: 101, name: 'dipika', place: 'hyderbad', dob: new Date('5/25/1998') },

    { id: 101, name: 'jinnu', place: 'Delhi', dob: new Date('9/13/1997') },

    { id: 101, name: 'raji', place: 'hyderbad', dob: new Date('12/05/1997') },
  ];
}

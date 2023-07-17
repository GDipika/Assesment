import { Component } from '@angular/core';
import { items } from 'src/app/javascript/javascript.module';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent {
  items:items[]=[
    {id:1,name:'employee1'},
    {id:2,name:'employee2'},
    {id:3,name:'employee3'},
    {id:4,name:'employee4'},
  ]
  login=true;

}

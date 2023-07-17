import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit, AfterViewInit {
  types = 'types works!';
  @ViewChild('maincontent') mainContent!: ElementRef;
  @ViewChildren('num') num!: QueryList<ElementRef>;
  data = [1, 2, 3];
  fruitsList = true;

  fruits: any[] = ['apple', 'banana', 'grapes'];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.num.toArray()[1].nativeElement.style.color = 'red';
  }

  public changeMainContent() {
    console.log('changeMainContent');
    this.mainContent.nativeElement.setAttribute('style', 'color:red');
  }
}

import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from 'src/app/datasharing/child/child.component';

@Component({
  selector: 'app-viewparent',
  templateUrl: './viewparent.component.html',
  styleUrls: ['./viewparent.component.scss'],
})
export class ViewparentComponent implements OnInit {
  ngOnInit(): void {}

  title = 'Parent calls an @ViewChild()';

  @ViewChild(ChildComponent, { static: true }) child!: ChildComponent;
  @ViewChild('button', { static: true })
  buttonRef?: ElementRef<HTMLButtonElement>;

  @ViewChildren(ChildComponent) children?: QueryList<ChildComponent>;
  @ViewChildren(ChildComponent) buttonsRef?: QueryList<ChildComponent>;
  increment() {
    console.log(this.child);
    this.child.increment();
  }

  ngAfterViewInit(): void {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'foo';
    }
    this.children?.forEach((child)=>console.log('child',child));
    this.buttonsRef?.forEach((buttonRef: any)=>console.log('button',buttonRef));
  }
  decrement() {
    this.child.decrement();
  }
}

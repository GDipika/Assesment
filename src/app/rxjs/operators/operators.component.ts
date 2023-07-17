import { Component } from '@angular/core';
import {
  of,
  from,
  map,
  filter,
  reduce,
  Observable,
  BehaviorSubject,
  Subject,
  observable,
  interval,
  merge,
  take,
  mergeAll,
  mergeMap,
  concat,
  concatAll,
} from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent {
  public result1: any;

  myobservable = new Observable((observer) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');
  });

  observable1 = Observable.create(
    (observer: {
      error(arg0: Error): unknown;
      next: (arg0: string) => void;
      complete: () => void;
    }) => {
      setTimeout(() => {
        observer.next('A');
      }, 100);
      setTimeout(() => {
        observer.next('B');
      }, 200);
      setTimeout(() => {
        observer.next('3');
      }, 300);
      setTimeout(() => {
        observer.next('4');
      }, 400);
      setTimeout(() => {
        observer.error(new Error('something went wrong'));
      }, 500);
      setTimeout(() => {
        observer.complete();
      }, 600);
    }
  );

  // of() and from() operator

  array1 = [1, 2, 3, 4];
  array2 = ['A', 'B', 'C'];

  observable = of(this.array1, this.array2);
  observable2 = from(this.array1);

  transformedobs = this.observable2.pipe(
    map((val) => {
      //transformedobs //5,10,15,20
      return val * 5;
    })
  );

  //filter operator
  filteredobs = this.transformedobs.pipe(
    filter((val) => {
      return val >= 10;
    })
  );

  // reduce operator
  reduceobs = this.transformedobs.pipe(reduce((acc, val) => acc + val, 0));

  public mapvalue: any;
  public filtervalue: any;
  public reducevalue: any;

  ngOnInit(): void {
    this.observable.subscribe(
      (data: any) => {
        console.log(data);
        // this.mapvalue = data;
        this.observable1 = data;
      },
      (error: { message: any }) => {
        alert(error.message);
      },
      () => {
        alert('observable has completed emiiting all values');
      }
    ),
      this.observable1.subscribe((data: any) => {
        console.log(data);
        this.observable1 = data;
      }),
      (error: { message: any }) => {
        alert(error.message);
      },
      () => {
        alert('observable has completed emitting all values');
      };

    this.reduceobs.subscribe((data: any) => {
      console.log(data);
      this.reducevalue = data;
    }),
      (error: { message: any }) => {
        alert(error.message);
      },
      () => {
        alert('observable has completed emitting all values');
      };
  }
}
//subject
const subject = new Subject();

subject.subscribe((d) => console.log(`subscriber1:${d}`)); //subscribing is listening
subject.next(10); // pass value 10
subject.subscribe((d) => console.log(`subscriber2:${d}`)); //returns nothing
subject.next(30);

//behavoir subject
const bsubject = new BehaviorSubject<number>(2);
bsubject.subscribe((d) => console.log(`bsub subscriber1: ${d}`));
bsubject.next(30);
bsubject.subscribe((d) => console.log(`bsub subscriber2: ${d}`));

// //merge operator
const source1 = interval(5000).pipe(
  map((val) => 'val from source1' + val),
  take(5)
);
const source2 = interval(5000).pipe(
  map((val) => 'val from source2' + val),
  take(4)
);
// merge
merge(source1, source2).subscribe((ans) => {
  console.log(ans);
});

// mergeAll
source1.pipe(map(() => source2)).subscribe((data1) => {
  console.log(data1);
});

// mergemap
// source1.pipe(mergeMap((val)=>source2)).subscribe((data1)=>{
//   console.log(data1);
//   })

import { Component } from '@angular/core';
import { items } from '../javascript.module';

@Component({
  selector: 'app-arraymethods',
  templateUrl: './arraymethods.component.html',
  styleUrls: ['./arraymethods.component.scss'],
})
export class ArraymethodsComponent {
  items: items[] = [
    { id: 1, name: 'junnu' },
    { id: 2, name: 'junn1' },
    { id: 3, name: 'junn2' },
    { id: 4, name: 'junn3' },
  ];
  login = true;

  l = 'list1';
  l2 = 'list2';
}

//ARRAY METHODS && string methods

// CONVERT TO STRING

let names = ['dany', 'john', 'sara'];
let names2 = ['dany', 'sara'];

let stringNames = names.toString();
console.log(stringNames);

//join method
let stringNames1 = names.join(' and ');
console.log(stringNames1);

//concat
let joined = names.concat(names2);
console.log(joined);


let values = [1, 2, 3, 4];
names.splice(1, 3, 'bill', 'bob', 'kok');
console.log(names);

// slice() //not includes last element
console.log(names);
let slice1 = names.slice(1, 3);
console.log(slice1);
console.log(names);

//indexOf
 let index=names.indexOf('bill');
 console.log(index);


//  flat()
 let number=[1,2,3,4,5,6,7,[1,2,3],9]
 let flat=number.flat(2)
 console.log(flat);

 names.forEach(n=>{
  console.log(n)
 })
let B = values.toString(); //converts the array to string
console.log(B, typeof B);

let c = values.join('_&_');
console.log(c);
values.push(5);
values.pop();
console.log(values); //removes the element from the array
values.push(3, 2); //adds the element to the array
console.log(values);

values.shift(); //removes the frst element
console.log(values);

values.unshift(2); //adds elements at start
console.log(values);

let num = [1, 2, 3, 4];
delete num[1];
console.log(num);
console.log(num.length); //after deleting array length will be same

//to concatinate
let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];
let numbers = num1.concat(num2);

let a = [1, 2, , 5];
a.push(33);
let b = a.toString();
console.log(b);

//replace
let letters = 'sam';
let newletters = letters.replace('sam', 'ram');

let plans = 'ASAS' + 'BAS' + 'CAS';
console.log(plans[0]);
console.log(plans[1]);
console.log(plans[2]);
console.log(plans[7]);

let name1 =' deepu';
console.log(name1.length) ;

let L = name1.toUpperCase;
console.log(name1.toUpperCase);

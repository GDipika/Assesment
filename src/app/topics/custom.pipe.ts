import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any){
   let currentYear:any=new Date().getFullYear();
   let userBirthYear:any=new Date(value).getFullYear();
   let userAge=currentYear-userBirthYear;
   return userAge;
  }
}

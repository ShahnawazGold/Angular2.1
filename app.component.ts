import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
   templateUrl: 'app/app.component.html',
   styles:[`input.ng-invalid{ border-left : 5px solid red; }
    input.ng-valid{border-left:5px solid green;}`]

               
})
export class AppComponent { 

myName ="shah";
 onSubmit( value:any){
   console.log(value);
 }
//     constructor() {
 
// }
 
 }



import {Component} from '@angular/core';

@Component({
    selector: 'child-one',
    template: `<div>This is child One {{name}}</div>`
})
export class ChildOneComponent { 
       name: string;

    constructor() {
     
      this.name= 'shah';
    }
}
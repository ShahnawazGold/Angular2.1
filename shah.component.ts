import { Component } from '@angular/core';

@Component({
  selector: 'my-shah',
  template: `<h1>Hello shah here </h1>
          <my-shah></my-shah>`,
 // directives :[ShahComponent];
})
export class ShahComponent  { name = 'Angular ds shah'; }

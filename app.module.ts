import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



import { AppComponent }  from './app.component';
import{ShahComponent} from './shah.component';
import{ChildOneComponent} from './ChildOne.component';

@NgModule({

  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

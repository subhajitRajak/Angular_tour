import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HeroesComponent } from './heroes/heroes.component';
import { DragulaModule} from 'ng2-dragula'

import { CKEditorModule } from 'ngx-ckeditor';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

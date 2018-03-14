import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { ImageuploaderComponent } from './imageuploader/imageuploader.component';
import { ImageResultComponent } from './image-result/image-result.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ImageuploaderComponent,
    ImageResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/** Create the Reference from the Froms Module directory  */
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './Components/photo/photo.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**import the Directory of that Forms Module reference  - for 2-way data biding  */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

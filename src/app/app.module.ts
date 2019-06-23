import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestsInterceptor } from './core/interceptors/http.interceptor';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SearchPipe } from './core/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [NgModel,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestsInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GithubGetService} from './github-get.service';
import { UserCardComponent } from './user-card/user-card.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    ErrorComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GithubGetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

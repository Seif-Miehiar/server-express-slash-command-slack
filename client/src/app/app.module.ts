import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDataComponent } from './components/all-data/all-data.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OneStudentComponent } from './components/one-student/one-student.component';

@NgModule({
  declarations: [AppComponent, AllDataComponent, NavBarComponent, OneStudentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

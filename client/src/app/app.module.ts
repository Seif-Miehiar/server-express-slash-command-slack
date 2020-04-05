import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDataComponent } from './components/all-data/all-data.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OneStudentComponent } from './components/one-student/one-student.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { SafeLinksPipe } from './pipes/safe-links.pipe';
import { FeatherModule } from 'angular-feather';
import { Trash } from 'angular-feather/icons';

const icons = {
  Trash,
};
@NgModule({
  declarations: [
    AppComponent,
    AllDataComponent,
    NavBarComponent,
    OneStudentComponent,
    ReversePipe,
    SafeLinksPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatherModule.pick(icons),
  ],
  // exports: [FeatherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

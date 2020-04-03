import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDataComponent } from './components/all-data/all-data.component';

const routes: Routes = [{ path: '', component: AllDataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

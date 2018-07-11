import { NgModule } from '@angular/core';
import {FfTestPageComponent} from './ff-test-page.component';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from '@app/core';

const routes: Routes = [
  Route.withShell([
    { path: 'ff-test-page', component: FfTestPageComponent, data: { title: extract('Ff-test-page') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FfTestPageRoutingModule { }

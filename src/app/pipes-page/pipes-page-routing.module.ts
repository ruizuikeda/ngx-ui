import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesPageComponent } from './pipes-page.component';

const routes: Routes = [
  {
    path: '',
    component: PipesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesPageRoutingModule {}

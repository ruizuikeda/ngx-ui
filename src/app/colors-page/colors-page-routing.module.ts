import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsPageComponent } from './colors-page.component';

const routes: Routes = [
  {
    path: '',
    component: ColorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsPageRoutingModule {}

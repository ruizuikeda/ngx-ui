import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionsPageComponent } from './sections-page.component';

const routes: Routes = [
  {
    path: '',
    component: SectionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsPageRoutingModule {}

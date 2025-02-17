import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlusMenuPageComponent } from './plus-menu-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlusMenuPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlusMenuPageRoutingModule {}

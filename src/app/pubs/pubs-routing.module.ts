import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubsPage } from './pubs.page';

const routes: Routes = [
  {
    path: '',
    component: PubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubsPageRoutingModule {}

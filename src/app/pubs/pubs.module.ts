import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubsPageRoutingModule } from './pubs-routing.module';

import { PubsPage } from './pubs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubsPageRoutingModule
  ],
  declarations: [PubsPage]
})
export class PubsPageModule {}

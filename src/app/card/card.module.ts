import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './component/card.component';
import { CardService } from '../services/card.service';

import { ManaCostIconsPipe } from './pipes/mana-cost-icons.pipe';
import { TextIconsPipe } from './pipes/text-icons.pipe';

@NgModule({
  declarations: [CardComponent, ManaCostIconsPipe, TextIconsPipe],
  imports: [
    CommonModule,
    CardRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    CardService
  ]
})
export class CardModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './component/search.component';
import { SearchService } from '../services/search.service';
import { ManaCostIconsPipe } from './pipes/mana-cost-icons.pipe';
import { TextIconsPipe } from './pipes/text-icons.pipe';

@NgModule({
  declarations: [SearchComponent, ManaCostIconsPipe, TextIconsPipe],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }

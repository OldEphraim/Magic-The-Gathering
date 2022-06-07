import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, takeWhile, tap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  alive = true;
  searchFormControl = new FormControl("");
  searchResults = [];
  filteredResults = [];
  loading = false;
  constructor(public searchService: SearchService, public stateService: SharedStateService) { }

  ngOnInit(): void {
    this.searchFormControl.setValue(this.searchService.searchTerm);
    this.searchFormControl.valueChanges
      .pipe(
        takeWhile(() => this.alive),
        tap(() => {
          this.searchService.clearResults();
          this.loading = true;
        }),
        debounceTime(500)
      )
      .subscribe(searchTerm => {
        this.searchService.search(searchTerm);
      });

      this.searchService.searchResults
        .subscribe(results => {
          this.searchResults = results;
          this.loading = false;
          this.filteredResults = this.searchResults.filter(card => card.imageUrl && card.name.indexOf("/") === -1);
        });
  }
  ngOnDestroy() {
    this.alive = false;
  }
}

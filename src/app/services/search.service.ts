import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchResults = new BehaviorSubject<any[]>([]);
  public searchTerm = "";

  constructor(private http: HttpClient) { }

  search(searchTerm: string) {
    if (!searchTerm || searchTerm === "") {
      this.searchResults.next([]);
      return;
    }
    this.searchTerm = searchTerm;
    this.http.get(`https://api.magicthegathering.io/v1/cards?name=${searchTerm}`)
      .subscribe((results: any) => {
        const { cards = [] } = results;
        this.searchResults.next(cards);
        console.log(results);
      });
  }

  clearResults() {
    this.searchResults.next([]);
  }
}

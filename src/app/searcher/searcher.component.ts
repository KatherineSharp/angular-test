import { SearchApi } from './searchApi';
import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  // Do not modify
  api = new SearchApi();
  // end of do not modify

  names = [];
  public searchField;
  searchUpdated = new Subject<string>();

  constructor() {
    this.searchUpdated.pipe(debounceTime(250)).subscribe((val) => this.search(val));
  }

  ngOnInit(): void {
    this.search();
  }

  search(val = '') {
    try {
      this.names = this.api.search(val);
    } catch (ex) {
      console.error(ex);
    }
  }
}

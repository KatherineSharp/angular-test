import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-media-sorted',
  templateUrl: './media-sorted.component.html',
  styleUrls: ['./media-sorted.component.scss']
})
export class MediaSortedComponent implements OnInit {
  apiUrl = 'assets/media.json';
  mediaCollection: Array<Media>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.imageJson.subscribe((result) => this.mediaCollection = result );
  }

  get imageJson(): Observable<Array<Media>> {
    return this.http.get<Media[]>(this.apiUrl).pipe(
      map(results => results.sort((x,y) => x.sortOrder - y.sortOrder))
    );
  }
}

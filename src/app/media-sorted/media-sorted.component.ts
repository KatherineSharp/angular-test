import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Array<Media>>(this.apiUrl);
  }
}

import { Media } from './../models/media';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss']
})
export class MediaGridComponent implements OnInit {
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

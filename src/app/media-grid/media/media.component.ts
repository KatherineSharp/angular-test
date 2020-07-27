import { Media } from './../../models/media';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  @Input() media: Media;

  constructor() { }

  ngOnInit(): void {
  }

}

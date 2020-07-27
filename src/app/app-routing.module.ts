import { SearcherComponent } from './searcher/searcher.component';
import { MediaSortedComponent } from './media-sorted/media-sorted.component';
import { FibberComponent } from './fibber/fibber.component';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'media-grid', component: MediaGridComponent },
  { path: 'fibber', component: FibberComponent },
  { path: 'media-sorted', component: MediaSortedComponent },
  { path: 'searcher', component: SearcherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

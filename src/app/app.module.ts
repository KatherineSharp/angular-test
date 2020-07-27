import { DemoMaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaComponent } from './media-grid/media/media.component';
import { HttpClientModule } from '@angular/common/http';
import { FibberComponent } from './fibber/fibber.component';
import { FormsModule } from '@angular/forms';
import { MediaSortedComponent } from './media-sorted/media-sorted.component';
import { SearcherComponent } from './searcher/searcher.component';

@NgModule({
  declarations: [AppComponent, MediaGridComponent, MediaComponent, FibberComponent, MediaSortedComponent, SearcherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

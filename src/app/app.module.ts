import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListEntryComponent } from './video-list-entry/video-list-entry.component';

import { HttpClientModule } from '@angular/common/http';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoPlayerComponent,
    VideoListComponent,
    VideoListEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

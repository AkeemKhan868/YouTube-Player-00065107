import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../services/video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video: any = null;

  constructor(private videoData:VideoDataService) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.videoData.newVideo.subscribe(x => this.video = x);
  }
}

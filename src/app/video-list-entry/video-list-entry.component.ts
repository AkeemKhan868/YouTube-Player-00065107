import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../services/video-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-list-entry',
  templateUrl: './video-list-entry.component.html',
  styleUrls: ['./video-list-entry.component.css']
})
export class VideoListEntryComponent implements OnInit {

  key = ''
  clickEventsubscription:Subscription;
  videoList:any

  constructor(private videoData:VideoDataService) {
    this.clickEventsubscription = this.videoData.getClickEvent().subscribe(()=>{
    this.getVideos();
    })
  }

  getVideos(){
    this.videoData.getVideos().subscribe((data) => {
      console.log(data)
      this.videoList = data.items
    })
  }

  openVideo(video: any){
    console.log(video);
    this.videoData.updateVideo(video);
  }

  ngOnInit(): void {
    this.getVideos();
    this.videoData.searchKey.subscribe(x => this.key = x);
  }
}

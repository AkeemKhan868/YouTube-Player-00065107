import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../services/video-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {  

  constructor(private videoData:VideoDataService) {}

  ngOnInit(): void {}

  text = '';

  updateText(text: string){
    this.videoData.updateKey(text);
    this.videoData.sendClickEvent();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http:HttpClient) { }

  
  private videoSearch = new Subject<any>();
  
  sendClickEvent() {
    this.videoSearch.next();
  }

  getClickEvent(): Observable<any>{ 
    return this.videoSearch.asObservable();
  }



  private key = new BehaviorSubject<string>("");
  public searchKey = this.key.asObservable();

  updateKey(text: string){
    this.key.next(text)
  }


  getVideos(){
    const API_KEY = 'AIzaSyBXlEjwwaYAXzifsyaF5rFGiOGfUwcoTjI'
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+this.key.value+"&type=video&key="+API_KEY
    console.log(this.key.value)

    return this.http.get<any>(url);
  }


  private currentVideo = new BehaviorSubject<any>(null);
  public newVideo = this.currentVideo.asObservable();

  updateVideo(videoObj: any){
    this.currentVideo.next(videoObj)
    return videoObj;
  }
}

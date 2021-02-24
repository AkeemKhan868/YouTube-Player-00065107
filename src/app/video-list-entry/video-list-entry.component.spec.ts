import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListEntryComponent } from './video-list-entry.component';

describe('VideoListEntryComponent', () => {
  let component: VideoListEntryComponent;
  let fixture: ComponentFixture<VideoListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

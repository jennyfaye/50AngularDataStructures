import { VideolistService } from './../../services/videolist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = [];
  video: string = '';

  constructor(private videolistService: VideolistService){
  }

  ngOnInit(): void {
    this.videoList = this.videolistService.getVideo();
  }

  addVideo(): void {
    this.videolistService.addVideo(this.video);
    this.video = '';
  }

  updateVideo(index: number): void {
    const currentName = this.videoList[index];
    const newName = prompt('Enter new video title:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.videolistService.updateVideo(index, newName.trim());
    }
  }

  deleteVideo(index: number): void {
    this.videolistService.deleteVideo(index);
  }
}

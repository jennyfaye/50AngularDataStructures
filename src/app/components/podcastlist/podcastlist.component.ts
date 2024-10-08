import { PodcastlistService } from './../../services/podcastlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = [];
  podcast: string = '';

  constructor(private podcastlistService: PodcastlistService){
  }

  ngOnInit(): void {
    this.podcastList = this.podcastlistService.getPodcast();
  }

  addPodcast(): void {
    this.podcastlistService.addPodcast(this.podcast);
    this.podcast = '';
  }

  updatePodcast(index: number): void {
    const currentName = this.podcastList[index];
    const newName = prompt('Enter new podcast:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.podcastlistService.updatePodcast(index, newName.trim());
    }
  }

  deletePodcast(index: number): void {
    this.podcastlistService.deletePodcast(index);
  }
}

import { Injectable } from '@angular/core';
import { EventDate } from '../components/eventlist/eventlist';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {
  private eventList: EventDate[] = [];

  getEvents(): EventDate[] {
    return this.eventList;
  }

  addEvent(event: EventDate): void {
    this.eventList.push(event);
  }

  updateEvent(index: number, event: EventDate): void {
    if (index >= 0 && index < this.eventList.length) {
      this.eventList[index] = event;
    }
  }

  deleteEvent(index: number): void {
    if (index >= 0 && index < this.eventList.length) {
      this.eventList.splice(index, 1);
    }
  }
}

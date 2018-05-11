import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  getEventById(eventId: number){
    for(let i = 0; i<= EVENTS.length - 1; i++){
      if (EVENTS[i].id === eventId) {
        return EVENTS[i];
      }
    }
  }

  getEvents(){
    return EVENTS;
  }

}

import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  getEvents(){
    return EVENTS;
  }

}

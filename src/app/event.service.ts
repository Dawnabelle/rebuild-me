import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Event } from './event.model';
import { EVENTS } from './mock-events';

@Injectable()

export class EventService {

  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
  }

  getEventById(eventId: number){
    // for(let i = 0; i<= EVENTS.length - 1; i++){
    //   if (EVENTS[i].id === eventId) {
    //     return EVENTS[i];
    //   }
    // }
  }

  getEvents(){
    return this.events;
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

}

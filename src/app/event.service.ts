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

  getEventById(eventId: string){
    return this.database.object('events/' + eventId);
  }

  updateEvent(localUpdatedEvent) {
    let eventEntryInFirebase = this.getEventById(localUpdatedEvent.$key);
    eventEntryInFirebase.update({
      date: localUpdatedEvent.date,
      location: localUpdatedEvent.location,
      venue: localUpdatedEvent.venue,
      tickets: localUpdatedEvent.tickets
    });
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  getEvents() {
    return this.events;
  }
}

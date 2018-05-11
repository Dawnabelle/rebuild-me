import { Component } from '@angular/core';
import { Event } from '../event.model';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor() { }

  events: Event [] =   [
    new Event(
      "JUNE 10, 2018",
      "CARDIFF, UK",
      "PRINCIPALITY STADIUM",
      "true",
      0
    ),
    new Event(
      "JUNE 9, 2018",
      "GLASGOW, UK",
      "HAMPDEN PARK",
      "true",
      1
    ),
    new Event(
      "JUNE 13, 2018",
      "MANCHESTER, UK",
      "ETIHAD STADIUM",
      "true",
      2
    )
  ];
}

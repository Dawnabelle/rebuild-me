import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../event.model';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor(private router: Router) { }

  events: Event [] =   [
    new Event(
      "JUNE 10, 2018",
      "CARDIFF, UK",
      "PRINCIPALITY STADIUM",
      true,
      0
    ),
    new Event(
      "JUNE 9, 2018",
      "GLASGOW, UK",
      "HAMPDEN PARK",
      true,
      1
    ),
    new Event(
      "JUNE 13, 2018",
      "MANCHESTER, UK",
      "ETIHAD STADIUM",
      true,
      2
    )
  ];

  gotToDetailPage(clickedEvent: Event){
    this.router.navigate(['events', clickedEvent.id]);
  }

}

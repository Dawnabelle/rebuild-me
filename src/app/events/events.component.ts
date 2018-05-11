import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})

export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private router: Router, private eventService: EventService) { }

  gotToDetailPage(clickedEvent: Event){
    this.router.navigate(['events', clickedEvent.id]);
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

}

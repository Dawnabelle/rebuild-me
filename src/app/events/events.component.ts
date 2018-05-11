import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})

export class EventsComponent implements OnInit {

  events: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  gotToDetailPage(clickedEvent){
    this.router.navigate(['events', clickedEvent.$key]);
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

}

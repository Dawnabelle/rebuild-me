import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EventService]
})
export class AdminComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  submitForm(date:string, location: string, venue: string, tickets: string){
    let newEvent: Event = new Event(date, location, venue, tickets);
    this.eventService.addEvent(newEvent);
  }


}

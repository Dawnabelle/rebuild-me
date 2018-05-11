import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})

export class EditEventComponent implements OnInit {
  @Input() selectedEvent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  beginUpdatingEvent(eventToUpdate) {
    this.eventService.updateEvent(eventToUpdate);
  }

}

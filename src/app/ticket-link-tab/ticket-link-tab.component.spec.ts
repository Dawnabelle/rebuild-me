import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketLinkTabComponent } from './ticket-link-tab.component';

describe('TicketLinkTabComponent', () => {
  let component: TicketLinkTabComponent;
  let fixture: ComponentFixture<TicketLinkTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketLinkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketLinkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

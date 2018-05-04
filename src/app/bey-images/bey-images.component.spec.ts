import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyImagesComponent } from './bey-images.component';

describe('BeyImagesComponent', () => {
  let component: BeyImagesComponent;
  let fixture: ComponentFixture<BeyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

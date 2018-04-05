import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySpaceListComponent } from './party-space-list.component';

describe('PartySpaceListComponent', () => {
  let component: PartySpaceListComponent;
  let fixture: ComponentFixture<PartySpaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySpaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySpaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

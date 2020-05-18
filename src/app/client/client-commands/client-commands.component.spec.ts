import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommandsComponent } from './client-commands.component';

describe('ClientCommandsComponent', () => {
  let component: ClientCommandsComponent;
  let fixture: ComponentFixture<ClientCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

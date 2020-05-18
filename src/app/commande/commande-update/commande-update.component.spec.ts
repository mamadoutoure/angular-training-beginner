import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeUpdateComponent } from './commande-update.component';

describe('CommandeUpdateComponent', () => {
  let component: CommandeUpdateComponent;
  let fixture: ComponentFixture<CommandeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModViewComponent } from './mod-view.component';

describe('ModViewComponent', () => {
  let component: ModViewComponent;
  let fixture: ComponentFixture<ModViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

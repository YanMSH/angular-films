import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFilmComponent } from './popup-film.component';

describe('PopupFilmComponent', () => {
  let component: PopupFilmComponent;
  let fixture: ComponentFixture<PopupFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

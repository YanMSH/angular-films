import { TestBed } from '@angular/core/testing';

import { FavoriteFilmService } from './favorite-film.service';

describe('FavoriteFilmService', () => {
  let service: FavoriteFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudGenresComponent } from './crud-genres.component';

describe('CrudGenresComponent', () => {
  let component: CrudGenresComponent;
  let fixture: ComponentFixture<CrudGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

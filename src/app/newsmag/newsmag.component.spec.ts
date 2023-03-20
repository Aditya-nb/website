import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmagComponent } from './newsmag.component';

describe('NewsmagComponent', () => {
  let component: NewsmagComponent;
  let fixture: ComponentFixture<NewsmagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsmagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsmagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

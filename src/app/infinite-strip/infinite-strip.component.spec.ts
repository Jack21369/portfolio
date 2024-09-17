import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteStripComponent } from './infinite-strip.component';

describe('InfiniteStripComponent', () => {
  let component: InfiniteStripComponent;
  let fixture: ComponentFixture<InfiniteStripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfiniteStripComponent]
    });
    fixture = TestBed.createComponent(InfiniteStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

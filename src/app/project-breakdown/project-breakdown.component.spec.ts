import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBreakdownComponent } from './project-breakdown.component';

describe('ProjectBreakdownComponent', () => {
  let component: ProjectBreakdownComponent;
  let fixture: ComponentFixture<ProjectBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBreakdownComponent]
    });
    fixture = TestBed.createComponent(ProjectBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

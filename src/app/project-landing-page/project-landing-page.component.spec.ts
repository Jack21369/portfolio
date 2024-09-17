import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLandingPageComponent } from './project-landing-page.component';

describe('ProjectLandingPageComponent', () => {
  let component: ProjectLandingPageComponent;
  let fixture: ComponentFixture<ProjectLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLandingPageComponent]
    });
    fixture = TestBed.createComponent(ProjectLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

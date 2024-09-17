import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../projectdetails';

@Component({
  selector: 'app-project-landing-page',
  templateUrl: './project-landing-page.component.html',
  styleUrls: ['./project-landing-page.component.scss']
})
export class ProjectLandingPageComponent {
  @Input() projectDetails?: ProjectDetails;

  constructor(){
    this.projectDetails = {
      name: "",
      technologies: "", 
      description: "", 
      category: [""],
      img: "", 
      projectCardImg: "", 
      id: "", 
      link: "",
    };
  }

  scrollToProjectBreakdown() {
    var projects = document.getElementById('project-breakdown');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

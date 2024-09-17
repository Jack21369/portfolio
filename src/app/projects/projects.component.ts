import { Component, inject } from '@angular/core';
import { ProjectDetails } from '../projectdetails';
import { ProjectInformationService } from '../project-information.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: ProjectDetails[] = [];
  projectService: ProjectInformationService = inject(ProjectInformationService);

  constructor(){
    this.projects = this.projectService.getAllProjectDetails();
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProjectInformationService } from '../project-information.service';
import { ProjectDetails } from '../projectdetails';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectInformationService = inject(ProjectInformationService);
  projectDetails: ProjectDetails | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id') ?? "";
    this.projectDetails = this.projectInformationService.getProjectDetailsById(projectId);
  }
}
import { Component, Input} from '@angular/core';
import { ProjectDetails } from '../projectdetails';

@Component({
  selector: 'app-project-breakdown',
  templateUrl: './project-breakdown.component.html',
  styleUrls: ['./project-breakdown.component.scss']
})
export class ProjectBreakdownComponent {
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
}

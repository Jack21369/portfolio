import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() name: string;
  @Input() technologies: string;
  @Input() description: string;
  @Input() category: string[];
  @Input() img: string;
  @Input() id: string;
  @Input() projectCardImg: string;
  @Input() link: string;

  constructor(){
    this.name = "";
    this.technologies = "";
    this.description = "";
    this.category = [""];
    this.img = "";
    this.projectCardImg = "";
    this.id = "";
    this.link = "";
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  text!: HTMLDivElement | null;
  intervalId: any;

  ngOnInit() {
    this.text = document.querySelector('.sec-text');
    this.textLoad();
    this.startTextLoad();
  }

  ngOnDestroy() {
    this.stopTextLoad();
  }

  startTextLoad() {
    this.intervalId = setInterval(() => {
      this.textLoad();
    }, 9000); // Adjust the interval as needed
  }

  stopTextLoad() {
    clearInterval(this.intervalId);
  }

  textLoad = () => {
    setTimeout(() => {
      this.text!.textContent = "Software Engineer";
    }, 0);

    setTimeout(() => {
      this.text!.textContent = "UCI CS Student";
    }, 3000);

    setTimeout(() => {
      this.text!.textContent = "Frontend Developer";
    }, 6000);
  }

  scrollToProjects() {
    var projects = document.getElementById('projects-sec');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth'});
    }
  }

  scrollToAbout() {
    var projects = document.getElementById('about-sec');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

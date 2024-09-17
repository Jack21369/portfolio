import { Component, HostListener, AfterViewInit, inject, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  scrollToAbout() {
    var projects = document.getElementById('about-sec');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigateByUrl('').then(() => {
        setTimeout(() => {
          const projects = document.getElementById('about-sec');
          if (projects) {
            projects.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
      });
    }
  }

  scrollToProjects() {
    var projects = document.getElementById('projects-sec');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }else {
      this.router.navigateByUrl('').then(() => {
        setTimeout(() => {
          const projects = document.getElementById('projects-sec');
          if (projects) {
            projects.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
      });
    }
  }

  toggleMenu() {
    const navButtons = document.getElementById('nav-buttons');
    if (navButtons) {
      navButtons.classList.toggle('is-active');
    }
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          const navButtons = document.getElementById("nav-buttons");
          const hamburger = document.getElementById("hamburger");
          if (navButtons){
            if (navButtons.classList.contains("fadeInFromTop")){
              navButtons.classList.add("fadeInFromTopReverse");
              navButtons.style.transform = 'translateY(-100px)';
            }
            navButtons.classList.remove("fadeInFromTop");
          }

          if (hamburger){
            if (hamburger.classList.contains("fadeInFromTop")){
              hamburger.classList.add("fadeInFromTopReverse");
              hamburger.style.transform = 'translateY(-100px)';
            }
            hamburger.classList.remove("fadeInFromTop");
            hamburger.style.display = 'none';

          }
      } else {
        const navButtons = document.getElementById("nav-buttons");
        const hamburger = document.getElementById("hamburger");
        if (navButtons){
          if (navButtons.classList.contains("fadeInFromTopReverse")){
            navButtons.classList.remove("fadeInFromTopReverse");
            navButtons.style.transform = 'none';
          }
          navButtons.classList.add("fadeInFromTop");
          navButtons.style.transform = 'none';
        }

        if (hamburger && window.matchMedia("(max-width: 768px)").matches){
          if (hamburger.classList.contains("fadeInFromTopReverse")){
            hamburger.classList.remove("fadeInFromTopReverse");
            hamburger.style.transform = 'none';
          }
          hamburger.classList.add("fadeInFromTop");
          hamburger.style.display = 'flex';
          hamburger.style.transform = 'none';
        }
        
      }
      
    })
  })

  ngAfterViewInit() {
    setTimeout(() => {
      const noNavBarIdentifier = document.getElementById('no-nav-bar');
      if (noNavBarIdentifier) {
        this.observer.observe(noNavBarIdentifier);
      }
    }, 0); 
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navButtons = document.getElementById('nav-buttons');
    const hamburger = document.querySelector('.hamburger');

    if (navButtons && !navButtons.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
      navButtons.classList.remove('is-active');
    }
  }

}


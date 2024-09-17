import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const left = document.querySelector(".left");
        const portrait = document.querySelector(".portrait");
        const contacts = document.querySelector(".contacts");
        const logoStrip = document.querySelector(".logo-strip");

        if (left){
          left.classList.add("fadeInFromLeft");
        }
        if (portrait){
          portrait.classList.add("fadeInFromRight");
        }
        if (contacts){
          contacts.classList.add("fadeInFromBottom");
        }
        if (logoStrip){
          logoStrip.classList.add("fadeInFromBottom");
        }
      } 
    })
  })

  ngOnInit(){
    const aboutMePage = document.querySelector(".about-me-page");
    if (aboutMePage){
      this.observer.observe(aboutMePage);
    }
  }

}

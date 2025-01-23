import { Injectable } from '@angular/core';
import { ProjectDetails } from './projectdetails';

@Injectable({
  providedIn: 'root'
})
export class ProjectInformationService {

  protected projectDetailsList: ProjectDetails[] = [
    { 
      name: 'Fablix', 
      technologies: 'Java TypeScript HTML CSS MySQL AWS', 
      description: 'Full-Stack Movie Browsing App containing 100k+ Movies and Actors.', 
      category: ['Full-Stack', 'Web Design', 'Hosting'], 
      img: "../../assets/imgs/fablixOneScreen.png", 
      projectCardImg: "../../assets/imgs/fablix.png", 
      id: "FabFlix", 
      link:"#"
    },
    { 
      name: 'Portfolio V2', 
      technologies: 'Angular TypeScript Firebase Figma', 
      description: 'Revamped version of my original portfolio.', 
      category: ['Front End', 'Hosting', 'Web Design'], 
      img: "../../assets/imgs/portfoliov2mock.png", 
      projectCardImg: "../../assets/imgs/portfoliov2.png", 
      id: "PortfolioV2", 
      link:"#" 
    },
    { 
      name: 'Portfolio V1', 
      technologies: 'JavaScript HTML CSS', 
      description: 'My first attempt of creating a web portfolio from scratch using HTML, CSS, and JavaScript.', 
      category: ['Front End', 'Web Design'], 
      img: "../../assets/imgs/oldport.png", 
      projectCardImg: "../../assets/imgs/oldwebsite.png", 
      id: "PortfolioV1", 
      link:"https://tinyurl.com/jackelweb"
    },
    { 
      name: 'ICS Search Engine', 
      technologies: 'Python Streamlit ChatGPT', 
      description: 'Building a search engine for UCI\'s ICS department using query stemming, TF-IDF ordering, and a self-developed crawler.', 
      category: ['Search', 'Query Processing', 'Crawling'], 
      img: "../../assets/imgs/icssearchmock4.png", 
      projectCardImg: "../../assets/imgs/icssearch.png", 
      id: "ICSSearch", 
      link:"#" 
    },
    { 
      name: 'BookIt', 
      technologies: 'Figma Prototyping', 
      description: 'Design project with Design@UCI, creating a study spot finder for busy students.', 
      category: ['UX/UI', 'Mobile App', 'User Research'], 
      img: "../../assets/imgs/bookitshowcase.png", 
      projectCardImg: "../../assets/imgs/bookitimg.png", 
      id: "BookIt", 
      link:"https://www.figma.com/proto/JEQtNkGZ0utko5lmWYo5z7/Hi-Fi-Wireframes?node-id=79-338&p=f&t=VOlOGVJChPpHM91j-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=79%3A338" 
    },
    { 
      name: 'Bundl', 
      technologies: 'Figma Prototyping', 
      description: 'Design project with Design@UCI, creating a food bundle app to help indecisive users.', 
      category: ['UX/UI', 'Mobile App', 'User Research'], 
      img: "../../assets/imgs/bundlmock.png", 
      projectCardImg: "../../assets/imgs/bundllogo.png", 
      id: "Bundl", 
      link:"https://www.figma.com/proto/t5O106YIYdmlB0hnNEMW62/food-application-all?type=design&node-id=189-611&t=E7vF6jifGD1uZ34j-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=189%3A611&mode=design" 
    },
    { 
      name: 'Google CSSI', 
      technologies: 'JS P5.JS Glitch', 
      description: 'Game projects I developed during my time in Google CSSI, using the P5.js library.', 
      category: ['Game Design', 'UX/UI'], 
      img: "../../assets/imgs/survivormock.png", 
      projectCardImg: "../../assets/imgs/survivor.png", 
      id: "CSSIGames", 
      link:"https://jack21369.github.io/websites/personal%20website/projects.html" 
    },
    { 
      name: 'First Web Projects', 
      technologies: 'HTML CSS', 
      description: 'My first few websites when I began diving into Web Design.', 
      category: ['Web Design', 'UX/UI'], 
      img: "../../assets/imgs/starterwebsmock.png", 
      projectCardImg: "../../assets/imgs/starterwebs.png", 
      id: "StartInWebDesign", 
      link:"https://jack21369.github.io/websites/personal%20website/projects.html" 
    },

    
  ]

  getAllProjectDetails(): ProjectDetails[] {
    return this.projectDetailsList;
  }

  getProjectDetailsById(id: String): ProjectDetails | undefined {
    return this.projectDetailsList.find(projectDetails => projectDetails.id === id);
  }
}

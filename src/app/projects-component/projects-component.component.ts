import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponent implements OnInit {

  faLink = faLink;
  faGithub = faGithub;

  pageTitle: string = 'My Work';

  projects: any[] = [
    {
      projectId: 0,
      projectName: 'Random Quote Generator',
      imgUrl: 'https://via.placeholder.com/1280x961',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      techArray: ['jQuery', 'vanilla js', 'BootStrap', 'third party web API'],
      description: 'A random quote generator that a user can use to get new quotes with the clicke of a button.',
      type: 'jquery',
      githubLink: 'https://www.github.com',
      appLink: 'https://www.github.com'
    },
    {
      projectId: 1,
      projectName: 'Weather Viewer',
      imgUrl: 'https://via.placeholder.com/1280x962',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      techArray: ['jQuery', 'vanilla js', 'BootStrap', 'third party web API'],
      description: 'A random quote generator that a user can use to get new quotes with the clicke of a button.',
      githubLink: 'github.com',
      type: 'javascript',
      appLink: 'github.com'
    },
    {
      projectId: 2,
      projectName: 'Weather Viewer',
      imgUrl: 'https://via.placeholder.com/1280x963',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      techArray: ['jQuery', 'vanilla js', 'BootStrap', 'third party web API'],
      description: 'A random quote generator that a user can use to get new quotes with the clicke of a button.',
      githubLink: 'http://www.github.com',
      type: 'javascript',
      appLink: 'https://www.github.com'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponent implements OnInit {
  pageTitle: string = 'My Work';

  projects: any[] = [
    {
      projectId: 0,
      projectName: 'Random Quote Generator',
      image: 'https://via.placeholder.com/1280x960',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      description: 'A random quote generator that a user can use to get new quotes with the clicke of a button.',
      githubLink: 'github.com',
      appLink: 'github.com'
    },
    {
      projectId: 1,
      projectName: 'Weather Viewer',
      image: 'https://via.placeholder.com/1280x960',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      description: 'A random quote generator that a user can use to get new quotes with the clicke of a button.',
      githubLink: 'github.com',
      appLink: 'github.com'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

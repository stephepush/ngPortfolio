import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponent implements OnInit {
  pageTitle: string = 'About Me';

  techLists: any[] = [
    {
      techs: ['HTML/CSS/JavaScript', 'ReactJS', 'BootStrap', 'jQuery', 'Node', 'PostgreSQL', 'WordPress', 'Git'],
      title: "Technologies I've completed projects with:"
    },
    {
      techs: ['Angular', 'PHP', 'MySQL/MariaDB', 'Ruby/Rails', 'Python', 'Django' ],
      title: "Tecnologies I've experimented with:"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

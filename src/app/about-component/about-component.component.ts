import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponent implements OnInit {
  pageTitle: string = 'About Me';

  completedTech: any[] = ['HTML/CSS/JavaScript', 'ReactJS', 'BootStrap', 'jQuery', 'Node', 'PostGRES', 'WordPress', 'Git']
  experimentedTech: any[] = ['Angular', 'PHP', 'MySQL', 'Ruby/Rails', 'Python', 'Django' ]

  constructor() { }

  ngOnInit(): void {
  }

}

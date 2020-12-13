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
      projectName: 'Pomodoro App',
      imgUrl: 'https://res.cloudinary.com/dmkct6wfu/image/upload/v1607055083/2020Portfolio/pomodoroClockReact.png',
      technologies: 'ReactJS, SemanticUI',
      techArray: ['React'],
      description: 'A react frontend that allows the user to practice the Pomodoro Technique. A personal exploration of async and the JavaScript event loop. Styled with accessibility in mind.',
      type: 'react',
      articleLink: 'https://www.forbes.com/sites/bryancollinseurope/2020/03/03/the-pomodoro-technique/?sh=fee065239857',
      githubLink: 'https://github.com/stephepush/reactPomodoroApp',
      appLink: 'https://stephepush.github.io/reactPomodoroApp/'
    },
    {
      projectId: 1,
      projectName: 'Drum Machine',
      imgUrl: 'https://res.cloudinary.com/dmkct6wfu/image/upload/v1607056644/2020Portfolio/ReactDrumMachine.png',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      techArray: ['jQuery', 'vanilla js', 'BootStrap', 'third party web API'],
      description: 'A drum machine made with react that allows the user to either click or press a corresponding key for a given sound to play. An exploration in JavaScript events and React state',
      type: 'react',
      githubLink: 'https://github.com/stephepush/reactDrumMachine',
      appLink: 'https://8sl9c.csb.app/'
    },
    {
      projectId: 2,
      projectName: 'Weather Viewer',
      imgUrl: 'https://res.cloudinary.com/dmkct6wfu/image/upload/v1607054683/2020Portfolio/WeatherApp.jpg',
      technologies: 'jQuery, Bootstrap, Vanilla JS, OpenWeather API, Browser Geolocation API, HTML, CSS',
      techArray: ['jQuery', 'CSS Grid/Flexbox', 'Vanilla JS', 'OpenWeather API', 'Browser Geolocation API', 'HTML', 'CSS'],
      description: 'A simple weather viewer that utilizes lots of JavaScript features.',
      githubLink: 'https://github.com/stephepush/weatherApp',
      appLink: 'https://stephepush.github.io/weatherApp/'
    },
    {
      projectId: 3,
      projectName: 'Random Quote Generator',
      imgUrl: 'https://res.cloudinary.com/dmkct6wfu/image/upload/v1607055673/2020Portfolio/randomQuoteGenerator.png',
      technologies: 'jQuery, jQueryUI, Bootstrap, Random Quote API, HTML, CSS',
      techArray: ['jQuery', 'vanilla js', 'BootStrap', 'third party web API'],
      description: 'A random quote generator where a user gets a new quote with the click of a button.',
      githubLink: 'https://github.com/stephepush/randomQuoteGenerator',
      appLink: 'https://stephepush.github.io/randomQuoteGenerator/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public selectedType;
  public typeSelected() {
    this.projects = this.projects.filter(
      project => project.type === this.selectedType
    )
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

//import { } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponent implements OnInit {

  Linkedin = faLinkedinIn;
  Github = faGithub;
  Twitter = faTwitter;

  socLinks: any[] = [
    {
      linkId: 0,
      fontAwesomeAlias: this.Linkedin,
      network: 'Linkedin',
      backgroundColor: '#0a66c2',
      link: 'https://www.linkedin.com/in/stephpdev/' 
    },
    {
      linkId: 1,
      fontAwesomeAlias: this.Github,
      network: 'Github',
      backgroundColor: '#999',
      link: 'https://github.com/stephepush' 
    },
    {
      linkId: 2,
      fontAwesomeAlias: this.Twitter,
      network: 'Twitter',
      backgroundColor: '#1da1f2',
      link: 'https://twitter.com/BxBytesSteph' 
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

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

  linkedinIn = faLinkedinIn;
  github = faGithub;
  twitter = faTwitter;


  constructor() { }

  ngOnInit(): void {
  }

}

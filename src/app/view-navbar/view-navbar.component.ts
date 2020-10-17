import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-navbar',
  templateUrl: './view-navbar.component.html',
  styleUrls: ['./view-navbar.component.css']
})
export class ViewNavbarComponent implements OnInit {

  faHome = faHome;
  faLink = faLink;
  faAddressCard = faAddressCard;
  faBriefcase = faBriefcase;
  constructor() { }

  ngOnInit(): void {
  }

}

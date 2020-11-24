import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar(): void {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
  constructor() { }

  ngOnInit(): void {
  }

}

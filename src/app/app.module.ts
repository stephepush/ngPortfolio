import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home-component/home-component.component';
import { AboutComponent } from './about-component/about-component.component';
import { ProjectsComponent } from './projects-component/projects-component.component';
import { ContactComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewNavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

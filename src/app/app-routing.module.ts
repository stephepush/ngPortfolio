import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';

const routes: Routes = [
  { path: 'about', component: AboutComponentComponent },
  { path: 'projects', component: ProjectsComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  // { path: 'home', component: HomeComponentComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: '', component: HomeComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

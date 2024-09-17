import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component'; 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jack Lee' },
  { path: 'about-me', component: AboutComponent, title: 'About Page' },
  { path: 'project-detail/:id', component: ProjectDetailComponent, title: 'Projects'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

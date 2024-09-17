import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { InfiniteStripComponent } from './infinite-strip/infinite-strip.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProjectLandingPageComponent } from './project-landing-page/project-landing-page.component';
import { ProjectBreakdownComponent } from './project-breakdown/project-breakdown.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    InfiniteStripComponent,
    FooterComponent,
    ProjectDetailComponent,
    ProjectLandingPageComponent,
    ProjectBreakdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

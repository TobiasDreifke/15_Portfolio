import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";
import { FeaturedProjects } from "./featured-projects/featured-projects";
import { Testimonials } from "./testimonials/testimonials";
import { Contact } from "./contact/contact";
import { Skills } from './skills/skills';

@Component({
  selector: 'app-mainpage',
  imports: [Hero, AboutMe, FeaturedProjects, Testimonials, Contact, Skills],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss'
})
export class Mainpage {

}

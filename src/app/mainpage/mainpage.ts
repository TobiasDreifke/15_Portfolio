import { Component, HostListener, inject } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";
import { FeaturedProjects } from "./featured-projects/featured-projects";
import { Testimonials } from "./testimonials/testimonials";
import { Contact } from "./contact/contact";
import { Skills } from './skills/skills';
import { ModalService } from '../services/modal-service';


@Component({
  selector: 'app-mainpage',
  imports: [Hero, AboutMe, FeaturedProjects, Testimonials, Contact, Skills],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss'
})
export class Mainpage {
  private modalService = inject(ModalService);
  private currentSection = 0;
  private sections: HTMLElement[] = [];
  private isMobile = false;

  ngAfterViewInit() {
    this.sections = Array.from(
      document.querySelectorAll('app-hero, app-about-me, app-skills, app-featured-projects, app-testimonials, app-contact, app-footer')
    );
    this.isMobile = window.innerWidth <= 1081;
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (this.isMobile) return;
    if (this.modalService.isModalOpen()) return; // skip scrolling when modal open
    if (!this.sections.length) return;

    event.preventDefault();
    if (event.deltaY > 0) {
      this.currentSection = Math.min(this.currentSection + 1, this.sections.length - 1);
    } else {
      this.currentSection = Math.max(this.currentSection - 1, 0);
    }

    this.sections[this.currentSection].scrollIntoView({ behavior: 'smooth' });
  }

}


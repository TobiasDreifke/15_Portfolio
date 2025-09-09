import { SingleTestimonial } from "./single-testimonial/single-testimonial";
import { Testimonial } from '../../interfaces/testimonial.interface';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../data/testimonials.data';
import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-testimonials',
  imports: [SingleTestimonial, CommonModule, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {

  private translate = inject(TranslateService);

  originalTestimonials: Testimonial[] = [];
  testimonials: Testimonial[] = [];

  currentIndex = 0;
  isTransitioning = false;

  constructor() {
    this.originalTestimonials = TESTIMONIALS; 

    this.testimonials = [
      ...this.originalTestimonials,
      ...this.originalTestimonials,
      ...this.originalTestimonials
    ];

    this.currentIndex = this.originalTestimonials.length;
  }

  // ... next(), prev(), getTransform() bleiben gleich




  // next() {
  //   this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  // }

  next() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex++;

    if (this.currentIndex >= (2 * this.originalTestimonials.length)) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentIndex = this.originalTestimonials.length
      }, 500);
    } else {
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  prev() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex--;

    if (this.currentIndex < this.originalTestimonials.length) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentIndex = (2 * this.originalTestimonials.length) - 1;
      }, 500);
    } else {
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }


  // prev() {
  //   this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  // }

  getTransform(): string {
    const centerOffset = 50;
    return `translateX(calc(${centerOffset}% - ${this.currentIndex * 50}%))`;
  }

}

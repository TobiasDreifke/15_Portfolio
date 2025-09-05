import { Component } from '@angular/core';
import { SingleTestimonial } from "./single-testimonial/single-testimonial";
import { Testimonial } from '../../interfaces/testimonial.interface';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../data/testimonials.data';



@Component({
  selector: 'app-testimonials',
  imports: [SingleTestimonial, CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {


  originalTestimonials: Testimonial[] = TESTIMONIALS;
  testimonials: Testimonial[] = [];

  currentIndex = 0;
  isTransitioning = false;

  constructor() {

    this.testimonials = [
      ...this.originalTestimonials,
      ...this.originalTestimonials,
      ...this.originalTestimonials
    ];


    this.currentIndex = this.originalTestimonials.length;
  }


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
    const centerOffset = 25;
    return `translateX(calc(${centerOffset}% - ${this.currentIndex * 45}%))`;
  }

}

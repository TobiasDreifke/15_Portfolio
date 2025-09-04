import { Component } from '@angular/core';
import { SingleTestimonial } from "./single-testimonial/single-testimonial";
import { Testimonial } from '../../interfaces/testimonial.interface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-testimonials',
  imports: [SingleTestimonial, CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      text: 'Lukas is an amazing collaborator. His problem-solving skills are top-notch.',
      author: 'H. Janisch – Team Partner'
    },
    {
      text: 'Working with Lukas is a pleasure. He delivers quality work consistently.',
      author: 'M. Schmidt – Project Lead'
    },
    {
      text: 'Lukas always goes the extra mile to ensure the team succeeds.',
      author: 'S. Keller – Colleague'
    }
  ];

  currentIndex = 0;
  isTransitioning = true;

  next() {
    this.currentIndex++;
  }

  prev() {
    this.currentIndex--;
    
  }

  getTransform(): string {
    const centerOffset = 25;
    return `translateX(calc(${centerOffset}% - ${this.currentIndex * 50}%))`;
  }

}

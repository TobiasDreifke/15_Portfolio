import { Component } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-single-testimonial',
  imports: [],
  templateUrl: './single-testimonial.html',
  styleUrl: './single-testimonial.scss'
})
export class SingleTestimonial {
  @Input()
  single_testimonial!: Testimonial;
}

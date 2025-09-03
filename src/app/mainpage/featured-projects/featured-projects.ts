import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss'
})
export class FeaturedProjects {
  hoveredIndex: number = -1;

  projects = [
    {
      name: 'Join',
      tech: 'Angular | Typescript | HTML | CSS | Firebase',
      image: 'assets/img/img/projects/Rectangle 30-1.png'
    },
    {
      name: 'El Pollo Loco',
      tech: 'HTML | CSS | JavaScript',
      image: 'assets/img/img/projects/Rectangle 30-2.png'
    },
    {
      name: 'DA Bubble',
      tech: 'Angular | Firebase | Typescript',
      image: 'assets/img/img/projects/Rectangle 30.png'
    }
  ];

  getImageTop(index: number): string {
    const totalRows = this.projects.length;
    const percentages = [0, 20, 60]; 
    return percentages[index] + '%';
  }
}


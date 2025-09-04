import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project01 } from './project-01/project-01';
import { Projects } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, Project01],
  templateUrl: './featured-projects.html',
  styleUrls: ['./featured-projects.scss']
})
export class FeaturedProjects {
  hoveredIndex: number = 0;

  projects: Projects[] = [
    {
      name: 'Join',
      description: "1 Explore a selection of my work here Interact with projects to see my skills in action",
      tech: [
        { tech: 'Angular', image: 'assets/img/icons/angular.png' },
        { tech: 'Typescript', image: 'assets/img/icons/typescript.png' },
        { tech: 'HTML', image: 'assets/img/icons/html.png' },
        { tech: 'CSS', image: 'assets/img/icons/css.png' },
        { tech: 'Firebase', image: 'assets/img/icons/firebase.png' }
      ],
      image: 'assets/img/img/projects/Rectangle 30-2.png',
    },
    {
      name: 'El Pollo Loco',
      description: "2 Explore a selection of my work here Interact with projects to see my skills in action",
      tech: [
        { tech: 'HTML', image: 'assets/img/icons/html.png' },
        { tech: 'CSS', image: 'assets/img/icons/css.png' },
        { tech: 'JavaScript', image: 'assets/img/icons/javascript.png' }
      ],
      image: 'assets/img/img/projects/Rectangle 30.png',
    },
    {
      name: 'DA Bubble',
      description: "3 Explore a selection of my work here Interact with projects to see my skills in action",
      tech: [
        { tech: 'Angular', image: 'assets/img/icons/angular.png' },
        { tech: 'Firebase', image: 'assets/img/icons/firebase.png' },
        { tech: 'Typescript', image: 'assets/img/icons/typescript.png' }
      ],
      image: 'assets/img/img/projects/Rectangle 30-1.png',
    }
  ];


  getImageTop(index: number): string {
    const totalRows = this.projects.length;
    const percentages = [0, 5, 10];
    return percentages[index] + '%';
  }

  selectedProject: Projects | null = null;
  selectedIndex: number | null = null;

  openProject(project: Projects, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
  }

  closeProject() {
    this.selectedProject = null;
    this.selectedIndex = null;
  }


}


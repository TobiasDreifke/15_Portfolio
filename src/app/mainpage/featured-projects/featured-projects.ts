import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project01 } from './project-01/project-01';
import { Projects } from '../../interfaces/projects.interface';
import { PROJECTS } from '../../data/projects.data';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, Project01, TranslateModule, TranslatePipe],
  templateUrl: './featured-projects.html',
  styleUrls: ['./featured-projects.scss']
})
export class FeaturedProjects {
  hoveredIndex: number = 0;

  projects: Projects[] = PROJECTS;

  getImageTop(index: number): string {
    const totalRows = this.projects.length;
    const percentages = [0, 10, 20];
    return percentages[index] + '%';
  }

  selectedProject: Projects | null = null;
  selectedIndex: number | null = null;

  openProject(project: Projects, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
    // document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    this.selectedIndex = null;
    // document.body.style.overflow = '';
  }

  goToNextProject() {
    this.selectedIndex = (this.selectedIndex! + 1) % this.projects.length;

    this.selectedProject = this.projects[this.selectedIndex!];

  }


}


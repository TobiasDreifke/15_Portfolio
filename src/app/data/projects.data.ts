import { Projects } from '../interfaces/projects.interface';

export const PROJECTS: Projects[] = [
  {
    nameKey: 'projects.join.name',
    descriptionKey: 'projects.join.description',
    tech: [
      { tech: 'Angular', image: 'assets/img/icons/angular.png' },
      { tech: 'Typescript', image: 'assets/img/icons/typescript.png' },
      { tech: 'HTML', image: 'assets/img/icons/html.png' },
      { tech: 'CSS', image: 'assets/img/icons/css.png' },
      { tech: 'Firebase', image: 'assets/img/icons/firebase.png' }
    ],
    image: 'assets/img/img/projects/Rectangle 30-2.png'
  },
  {
    nameKey: 'projects.elpollo.name',
    descriptionKey: 'projects.elpollo.description',
    tech: [
      { tech: 'HTML', image: 'assets/img/icons/html.png' },
      { tech: 'CSS', image: 'assets/img/icons/css.png' },
      { tech: 'JavaScript', image: 'assets/img/icons/javascript.png' }
    ],
    image: 'assets/img/img/projects/Rectangle 30-1.png'
  },
  {
    nameKey: 'projects.dabubble.name',
    descriptionKey: 'projects.dabubble.description',
    tech: [
      { tech: 'Angular', image: 'assets/img/icons/angular.png' },
      { tech: 'Firebase', image: 'assets/img/icons/firebase.png' },
      { tech: 'Typescript', image: 'assets/img/icons/typescript.png' }
    ],
    image: 'assets/img/img/projects/Rectangle 30.png'
  }
];

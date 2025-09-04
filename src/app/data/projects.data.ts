import { Projects } from '../interfaces/projects.interface';

export const PROJECTS: Projects[] = [
    {
        name: 'Join',
        description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
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
        description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        tech: [
            { tech: 'HTML', image: 'assets/img/icons/html.png' },
            { tech: 'CSS', image: 'assets/img/icons/css.png' },
            { tech: 'JavaScript', image: 'assets/img/icons/javascript.png' }
        ],
        image: 'assets/img/img/projects/Rectangle 30-1.png',
    },
    {
        name: 'DA Bubble',
        description: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
        tech: [
            { tech: 'Angular', image: 'assets/img/icons/angular.png' },
            { tech: 'Firebase', image: 'assets/img/icons/firebase.png' },
            { tech: 'Typescript', image: 'assets/img/icons/typescript.png' }
        ],
        image: 'assets/img/img/projects/Rectangle 30.png',
    }
];
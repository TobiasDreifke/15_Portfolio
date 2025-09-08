import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skillSet = [
    {
      language: "HTML",
      icon: "html.png",
    },
    {
      language: "CSS",
      icon: "css.png",
    },
    {
      language: "JavaScript",
      icon: "javascript.png",
    },
    {
      language: "Material Design",
      icon: "material design.png",
    },
    {
      language: "TypeScript",
      icon: "typescript.png",
    },
    {
      language: "Angular",
      icon: "angular.png",
    },
    {
      language: "Firebase",
      icon: "firebase.png",
    },
    {
      language: "Git",
      icon: "git.png",
    },
    {
      language: "REST-API",
      icon: "rest-api.png",
    },
    {
      language: "Scrum",
      icon: "scrum.png",
    },
    {
      language: "Growth mindset",
      icon: "growthmindset.png",
    },
  ]


  triggerAnimation(img: HTMLElement) {
    img.classList.add('animate');

    setTimeout(() => img.classList.remove('animate'), 600);
  }

  









}

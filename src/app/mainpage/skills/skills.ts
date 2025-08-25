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
      icon: "html-icon.png",
    },
    {
      language: "CSS",
      icon: "html-icon.png",
    },
    {
      language: "JavaScript",
      icon: "html-icon.png",
    },
    {
      language: "Material Design",
      icon: "html-icon.png",
    },
    {
      language: "TypeScript",
      icon: "html-icon.png",
    },
    {
      language: "Angular",
      icon: "html-icon.png",
    },
    {
      language: "Firebase",
      icon: "html-icon.png",
    },
    {
      language: "Git",
      icon: "html-icon.png",
    },
       {
      language: "REST-API",
      icon: "html-icon.png",
    },
    {
      language: "Scrum",
      icon: "html-icon.png",
    },
    {
      language: "Growth mindset",
      icon: "html-icon.png",
    },
  ]
}

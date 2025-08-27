import { Component } from '@angular/core';
import { Banner } from "./banner/banner";

@Component({
  selector: 'app-hero',
  imports: [Banner],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
}

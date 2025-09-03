import { Component } from '@angular/core';
import { Banner } from "./banner/banner";
import { TopElements } from './top-elements/top-elements';

@Component({
  selector: 'app-hero',
  imports: [Banner, TopElements],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainpage } from "./mainpage/mainpage";
import { Footer } from "./shared-pages/footer/footer";
import { Navbar } from './shared-pages/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainpage, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('15_Portfolio');
}

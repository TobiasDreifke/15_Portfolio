import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared-pages/footer/footer";
import { Navbar } from './shared-pages/navbar/navbar';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('15_Portfolio');


  ngAfterViewInit() {
    const cursor = document.getElementById('cursor-shadow');
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      const rect = cursor.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      cursor.style.transform = `translate(${e.clientX - centerX}px, ${e.clientY - centerY}px)`;
    };

    document.addEventListener('mousemove', updateCursor);
  }

  ngOnInit() {
    AOS.init();
  }
  onActivate() {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
  
}

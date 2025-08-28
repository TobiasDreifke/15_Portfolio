import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  activeLanguage: 'EN' | 'DE' = 'EN';  // default language

  toggleLang() {
    this.activeLanguage = this.activeLanguage === 'EN' ? 'DE' : 'EN';
  }

  activeSection: string = ''; 
}

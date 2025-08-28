import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  email = 'hello@example.com';
  subject = 'Hello!';
  body = 'Hi there 🙂';

  get mailtoLink() {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
  }
}


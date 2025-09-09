import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterModule, CommonModule,TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true,
})
export class Contact {

  private http = inject(HttpClient);

  // form model
  contactData = {
    name: '',
    email: '',
    message: '',
    agree: false,
  };

 
  mailTest = false; 

  post = {
    endPoint: 'https://tobiasdreifke.com/sendMail.php',
    body: (payload: any) => payload, 
    options: {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid || !this.contactData.agree) {
      console.warn('Form invalid or user did not agree');
      return;
    }

    if (this.mailTest) {
      console.info('Testing mode – no mail sent', this.contactData);
      ngForm.resetForm();
      return;
    }

    this.http
      .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: (response) => {
          console.info('Mail sent successfully:', response);
          ngForm.resetForm();
        },
        error: (error) => {
          console.error('Error sending mail:', error);
        },
        complete: () => console.info('send post complete'),
      });
  }
}


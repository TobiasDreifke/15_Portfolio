import { Component, signal, inject } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {

}

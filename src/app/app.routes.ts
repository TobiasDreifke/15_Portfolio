import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { LegalNotice } from './imprint/legal-notice/legal-notice';

export const routes: Routes = [
    { path: '', component: Mainpage },
    { path: 'legal', component: LegalNotice },
     { path: 'about', component: LegalNotice },
];

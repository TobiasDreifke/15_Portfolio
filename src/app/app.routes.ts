import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { LegalNotice } from './imprint/legal-notice/legal-notice';
import { Privacy } from './privacy/privacy';

export const routes: Routes = [
    { path: '', component: Mainpage },
    { path: 'legal', component: LegalNotice },
    { path: 'privacy', component: Privacy },
];

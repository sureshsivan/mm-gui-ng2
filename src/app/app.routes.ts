import { Routes } from '@angular/router';
import {BannerComponent} from './banner/components/banner/banner.component';

export const ROOT_ROUTES: Routes = [
  { path: '', component: BannerComponent },
  { path: 'login', component: BannerComponent },
  { path: 'home', component: BannerComponent },
  { path: 'callback', component: BannerComponent },
  { path: '**', redirectTo: '' }
];

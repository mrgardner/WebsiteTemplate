import { provideRouter, RouterConfig } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import {EventsComponent} from "./events/events.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";


const APP_ROUTES: RouterConfig = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];

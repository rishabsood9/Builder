import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AeroCityComponent } from './components/aero-city/aero-city.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EnquireNowComponent } from './components/enquire-now/enquire-now.component';
import { TestimonialsComponent } from './components/testimonial/testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: 'aerocity', component: AeroCityComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'testimonial', component: TestimonialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

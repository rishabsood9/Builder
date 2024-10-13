import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AeroCityComponent } from './components/aero-city/aero-city.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickableTileComponent } from './components/clickable-tile/clickable-tile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BtnComponent } from './components/custom/btn/btn.component';
import { EnquireNowComponent } from './components/enquire-now/enquire-now.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialsComponent } from './components/testimonial/testimonial.component';
import { TestimonialModalComponent } from './components/testimonial-modal/testimonial-modal.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ModalComponent } from './components/modal/modal.component';
import { LuxuryCardComponent } from './components/luxury-card/luxury-card.component';
import { LuxuryComponent } from './components/luxury/luxury.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NearbyPlacesComponent } from './components/nearby-places/nearby-places.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ClickableTileComponent,
    AeroCityComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    EnquireNowComponent,
    BtnComponent,
    FooterComponent,
    MessageComponent,
    TestimonialCardComponent,
    TestimonialsComponent,
    TestimonialModalComponent,
    ProjectDetailsComponent,
    ModalComponent,
    LuxuryCardComponent,
    LuxuryComponent,
    CarouselComponent,
    NearbyPlacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { MenuComponent } from '../menu/menu.component';
import { ExperienceComponent } from '../experience/experience.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    ExperienceComponent,
    WhyUsComponent,
    ReviewsComponent,
    ReservationComponent,
    LocationComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <div class="section-divider"></div>
    <app-experience></app-experience>
    <app-menu></app-menu>
    <app-why-us></app-why-us>
    <app-reviews></app-reviews>
    <app-reservation></app-reservation>
    <app-location></app-location>
  `,
  styles: [`
    .section-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, var(--secondary), transparent);
      width: 80%;
      margin: 0 auto;
      opacity: 0.3;
    }
  `]
})
export class HomeComponent { }

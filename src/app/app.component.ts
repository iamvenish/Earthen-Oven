import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'earthen-oven-app';
  isHomePage = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkRoute();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
      window.scrollTo(0, 0);
      setTimeout(() => this.reveal(), 100);
    });
    this.reveal();
  }

  checkRoute() {
    this.isHomePage = this.router.url === '/home' || this.router.url === '/';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.reveal();
  }

  reveal() {
    if (typeof window !== 'undefined') {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    }
  }
}

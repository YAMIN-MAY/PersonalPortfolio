import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
  constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       gtag('config', 'G-XXXXXXXXXX', {
  //         page_path: event.urlAfterRedirects,
  //       });
  //     }
  //   });
  // }
}

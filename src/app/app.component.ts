import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { Gtag } from 'angular-gtag';

declare global 
{
   interface Window { gtag: any; } 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';

  constructor(private router: Router) { } 

  ngOnInit() { if (typeof window !== 'undefined') 
    { 
      this.router.events.pipe( filter(event => event instanceof NavigationEnd) ).subscribe((event: NavigationEnd) => {
       window.gtag('config', 'G-P54CVKL3SX', { 'page_path': event.urlAfterRedirects }); 
      }); 
    } 
  }
  
  // ngOnInit() 
  // { this.router.events.pipe( 
  //   filter(event => event instanceof NavigationEnd) 
  // ).subscribe((event: NavigationEnd) => 
  //   { window.gtag('config', 'G-P54CVKL3SX', { 'page_path': event.urlAfterRedirects }); }); 
  // }
}

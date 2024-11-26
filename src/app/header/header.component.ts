import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faMoon = faMoon; 
  faSun = faSun; 
  isDarkMode: boolean = false; 
  
  toggleTheme() 
  { 
    this.isDarkMode = !this.isDarkMode; 
    document.body.classList.toggle('dark-mode', this.isDarkMode); 
  }
}

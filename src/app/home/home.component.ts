import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes, query, stagger
} from '@angular/animations';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('typingColor', [transition(':enter', [style({ width: 0, overflow: 'hidden', whiteSpace: 'nowrap', color: '#34495e' }), animate('3s steps(10, end)', style({ width: '*' })), animate('1s', keyframes([style({ color: '#34495e', offset: 1 })]))])]),
  ],

})
export class HomeComponent {
}

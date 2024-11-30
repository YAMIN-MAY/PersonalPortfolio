import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  // animations: [
  //   trigger('fadeAnimation', [
  //     state('visible', style({ opacity: 1 })),
  //     state('hidden', style({ opacity: 0 })),
  //     transition('hidden => visible', animate('1s ease-in')),
  //     transition('visible => hidden', animate('1s ease-out')),
  //   ]),
  // ],
})
export class AboutComponent {
  images: string[] = [
    'assets/group.jpg',
    'assets/bagan.jpg',
    'assets/run.jpg'
  ];

  // currentImageIndex = 0;
  // private intervalId: any;

  // ngOnInit(): void {
  //   this.intervalId = setInterval(() => {
  //     this.currentImageIndex =
  //       (this.currentImageIndex + 1) % this.images.length;
  //   }, 3000); 
  // }

  // ngOnDestroy(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

}

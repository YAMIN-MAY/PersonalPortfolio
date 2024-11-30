import { Component,Inject,PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  images: string[] = [
    'assets/group.jpg',
    'assets/bagan.jpg',
    'assets/run.jpg'
  ];

  currentImageIndex = 0; 
  intervalId: any;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => this.changeImage(), 2000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  // ngOnInit() { 
  //   this.intervalId = setInterval(() => this.changeImage(), 2000); 
  // }

  // ngOnDestroy() { if (this.intervalId) { clearInterval(this.intervalId); } }

  // changeImage() { this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; }
}

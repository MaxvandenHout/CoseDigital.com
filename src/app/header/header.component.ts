import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  manualOpen = false;
  get menuOpen(): boolean {
    if (!this.isLower) {
      return true;
    }

    if (this.manualOpen) {
      return true;
    }

    return false;
  }

  get isLower(): boolean {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 300) {
      return true;
    }

    return false;
  }

  lastClicked: Date = new Date(0,0,0);
  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.manualOpen = !this.manualOpen;
  }

  scrollPage(page: string) {
    if (this.lastClicked.getTime() + 1000 > new Date().getTime()) {
      return;
    }

    this.lastClicked = new Date();
    const element = document.getElementById(page);
    const height = element?.getBoundingClientRect();
    if (height) {
      setTimeout(() => {
        window.scrollTo(0, height.y);
      }, 100)
    }
    
    
  }

}

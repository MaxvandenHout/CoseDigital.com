import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lastClicked: Date = new Date(0,0,0);
  constructor() { }

  ngOnInit(): void {
  }

  scrollPage(page: string) {
    if (this.lastClicked.getTime() + 1000 > new Date().getTime()) {
      return;
    }

    this.lastClicked = new Date();
    const element = document.getElementById(page);
    const height = element?.getBoundingClientRect();
    setTimeout(() => {
      window.scroll({
        top: height?.y,
        behavior: 'smooth'
      });
    }, 100)
    
  }

}

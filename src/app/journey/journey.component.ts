import { Component, OnInit } from '@angular/core';
import journeyElements from './journeyElements';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  journeyElements = journeyElements
  constructor() { }

  ngOnInit(): void {
  }

  hasImage(el: any): boolean {
    return el.imgSource == undefined ? false : el.imgSource.length > 0;
  }

  goToUrl(el: any): void {
    if (el?.url?.length > 0) {
      window.open(el?.url, '_blank');
    }
  }

}

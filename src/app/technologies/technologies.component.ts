import { Component, OnInit } from '@angular/core';
import technologies from './technologies';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologies = technologies;
  constructor() { }

  ngOnInit(): void {
  }

  getColAmount(): number {
    return Math.round(window.innerWidth / 300);
  }

  getBackgroundImage(src: string): string {
    return `background-image: url("${src}");`;

  }

}

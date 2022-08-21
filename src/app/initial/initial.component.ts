import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  constructor() { }

  options = {
    strings: [
      'Lorem ipsum dolor sit ametryrr, consectetur adipiscing elit', 
      'consectetur adipiscing dlit Lorem ipsum dolor sit ametryrr,',
      'Lorem ipsum dolor sit ametryrr, consectetur adipiscing elit', 
      'consectetur adipiscing dlit Lorem ipsum dolor sit ametryrr,',
      'Lorem ipsum dolor sit ametryrr, consectetur adipiscing elit', 
      'consectetur adipiscing dlit Lorem ipsum dolor sit ametryrr,',
  ],
    typeSpeed: 30,
    loop: true
  };


  ngOnInit(): void {
    const typed = new Typed('#typed', this.options);
  }

}

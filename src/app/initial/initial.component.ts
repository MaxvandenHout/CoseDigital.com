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
      'Where code gets made', 
      'Where code just works', 
      'Where repetitive digital work cannot exist',
      'Bringing you what you need', 
      'Writing code that matters',
      'Bringing all things web together', 
  ],
    typeSpeed: 30,
    loop: true
  };


  ngOnInit(): void {
    const typed = new Typed('#typed', this.options);
  }

}

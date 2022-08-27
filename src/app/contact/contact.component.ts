import { Component, OnInit } from '@angular/core';
import { MonacoEditorModule, NgxEditorModel, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import technologies from '../technologies/technologies';
import axios from 'axios';
import contacts from './contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  editorOptions = { 
    theme: 'vs-dark', 
    language: 'html',
    outerHeight: 800,
  };
  code: string = `<head>
    <title>INSERT TITLE HERE</title>
    <email>INSERT YOUR EMAIL HERE</email>
</head>
<body>
    WRITE YOUR MESSAGE HERE
</body>`;
  constructor() { }
  vpw = 0;
  contacts = contacts;
   // bot = new Telegraf('5303297833:AAFYRxyWC-vzJfRqkLKoR3NZZU38UW25zkQ');
  ngOnInit(): void {
    this.vpw = window.innerWidth;
  }

  contactClicked(contact: any) {
    if (contact?.mail) {
      var mailto_link = 'mailto:' + 'max@pineus.nl';
      window.open(mailto_link, '_blank')
    }

    window.open(contact.src, "_blank");
  }

  send(): void {
    axios.get('/api/send?text=' + this.code).then(
      res => {
      this.code = `<head>
</head>
<body>
    Thank you for your message! I will awnser you ASAP
</body>`
    }).catch(err => {
      this.code = `<head></head>
<body>
    Reaching me failed, please connect with me via another way and complain that this did not work
</body>`
    })
  }

}

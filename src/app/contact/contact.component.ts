import { Component, OnInit } from '@angular/core';
import { MonacoEditorModule, NgxEditorModel, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import technologies from '../technologies/technologies';
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
  code: string = '';
  constructor() { }
  vpw = 0;
  contacts = contacts;
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

}

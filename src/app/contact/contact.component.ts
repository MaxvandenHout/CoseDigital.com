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
    outerHeight: 800

  };
  code: string = '';
  constructor() { }

  contacts = contacts;
  ngOnInit(): void {
  }

  getColAmount(): number {
    return Math.round((window.innerWidth * 0.4) / 100) > 3 ? 3 : (Math.floor((window.innerWidth * 0.4) / 100));
  }

  contactClicked(contact: any) {
    window.open(contact.src, "_blank");
  }

}

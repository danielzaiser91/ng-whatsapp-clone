import { Component, OnInit } from '@angular/core';
import { chat as sample_chat } from '../sample_chat';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  contacts = sample_chat;

  constructor() { }

  ngOnInit(): void {
  }

}

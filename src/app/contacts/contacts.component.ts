import { Component, OnInit } from '@angular/core';
import { chat as sample_chat } from '../sample_chat';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  chats: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const sample = sample_chat[0];
    Array(10).fill(0).map(()=>this.chats.push(sample))
  }
}

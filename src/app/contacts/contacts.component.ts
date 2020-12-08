import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  @Input() chats: any[] = [];
  @Output() clickedChatEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  clickedChat(chat_id: number) {
    this.clickedChatEvent.emit(chat_id)
  }
}

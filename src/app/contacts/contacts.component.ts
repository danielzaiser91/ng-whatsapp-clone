import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isThisWeek, isToday, startOfWeek } from 'date-fns'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  @Input() chats: any[] = [];
  @Input() active_id: number = 0;

  @Output() clickedChatEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  clickedChat(chat_id: number) {
    this.clickedChatEvent.emit(chat_id)
  }

  public dateBefore(date: Date): number {
    if(isToday(date)) return 1;
    if(isThisWeek(date)) return 2;
    if(date < startOfWeek(Date.now())) return 3;
    else return 0;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { isThisWeek, isToday, startOfWeek } from 'date-fns'
import { ChatService } from '../chat-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  chats: any[] = [];
  active_id: number = 0;

  @Output() clickedChatEvent = new EventEmitter;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chats = this.chatService.getChats();
    this.active_id = this.chatService.getActiveId();
  }

  changeActiveChatTo(chat_id: number) {
    this.active_id = chat_id;
    this.chatService.setActiveId(chat_id);
  }

  public dateBefore(date: Date): number {
    if(isToday(date)) return 1;
    if(isThisWeek(date)) return 2;
    if(date < startOfWeek(Date.now())) return 3;
    else return 0;
  }

  shorten(text: string): string {
    return text.length < 30 ? text : text.substring(0,22)+'...';
  }
}

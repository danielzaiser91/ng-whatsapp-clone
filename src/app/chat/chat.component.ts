import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  @Input() chats: any[] = [];
  @Input() active_id: number = 0;
  complete_chat: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fillChat();
  }

  public fillChat() {
    this.complete_chat = this.chats.find(v=>v.chat_id == this.active_id).chat.complete_chat
  }
}

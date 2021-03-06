import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass'],
  animations: [
    trigger('emojiEnterDelay',
    [ transition(':enter', [
      style({ width: 0 }),
      animate('700ms 1s', style({ width: 78 }))
    ]) ]
    ),
    trigger(
      'emojiMenuToggle', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ width: 192, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: 192, opacity: 1 }),
            animate('1s ease-in', 
                    style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ChatComponent implements OnInit {
  complete_chat: any[] = [];
  inputValue: string = '';
  showEmojiMenu: boolean = false;
  @ViewChild('chatWindow') chatWindow!: ElementRef;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.active_id.subscribe(() => this.setActiveChat());
    this.complete_chat = this.chatService.getActiveChat().complete_chat;
  }

  setActiveChat() {
    this.complete_chat = this.chatService.getActiveChat().complete_chat;
  }

  onSendInput() {
    this.chatService.addMessageToActiveChat(this.inputValue);
    this.inputValue = '';
  }

  addRandomResponse() {
    this.chatService.addMessageToActiveChat(this.chatService.getRandomSentence(), 0);
  }
  scrollChatBottom() {
    this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
    //TODO: Autoscroll on new message
    //document.querySelector('.chat-window-inner').scrollTop = document.querySelector('.chat-window-inner').scrollHeight
  }
}

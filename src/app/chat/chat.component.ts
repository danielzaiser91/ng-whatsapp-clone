import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass'],
  animations: [
    trigger('delayShow',
    [ transition(':enter', [
      style({ width: 0 }),
      animate('700ms 1s', style({ width: 78 }))
    ]) ]
    ),
    trigger(
      'inOutAnimation', 
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
  @Input() chats: any[] = [];
  @Input() active_id: number = 0;
  complete_chat: any[] = [];
  inputValue: string = '';
  showEmojiMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.fillChat();
  }

  public fillChat(): void {
    this.complete_chat = this.chats.find(v=>v.chat_id == this.active_id).chat.complete_chat
  }

  output(v: any) {
    console.log(v);
  }
}

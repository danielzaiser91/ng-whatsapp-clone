import { Injectable } from '@angular/core';
import { subDays } from 'date-fns';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import deepCopy from 'src/assets/js/deepCopy';
import { chat as sample_chat } from './sample_chat';
import { sentences } from './sentences';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chats: any[] = [];
  public active_id = new BehaviorSubject<number>(3);

  constructor() {
    const sample = sample_chat[0];
    const today = Date.now();
    Array(10).fill(0).map((_,i)=>{
      const sample_with_id = deepCopy(sample);
      sample_with_id.chat_id = i;
      sample_with_id.chat.contact.id = i;
      sample_with_id.chat.last_message.date = subDays(today, i);
      return this.chats.push(sample_with_id)
    })
   }

  getActiveId() {
    return this.active_id.value;
  }
  setActiveId(chat_id: number) {
    this.active_id.next(chat_id);
  }
  getChats() {
    return this.chats;
  }
  getActiveChat() {
    return this.chats.find(v=>v.chat_id == this.active_id.value).chat.complete_chat
  }
  addMessageToActiveChat(msg: string, send_by: number = 1) {
    this.getActiveChat().push(
      {
        send_by: send_by,
        message: msg,
        date: new Date(),
        status: 1
      }
    );
  }
  getRandomSentence(): string {
    const i = Math.floor(Math.random()*sentences.length);
    return sentences[i];
  }
}

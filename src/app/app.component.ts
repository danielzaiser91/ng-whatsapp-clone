import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import deepCopy from 'src/assets/js/deepCopy';
import { chat as sample_chat } from './sample_chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  chats: any[] = [];
  title = 'ng-whatsapp';
  ngOnInit() {
    const sample = sample_chat[0];
    Array(10).fill(0).map((_,i)=>{
      const sample_with_id = deepCopy(sample);
      sample_with_id.chat_id = i;
      sample_with_id.chat.contact.id = i;
      return this.chats.push(sample_with_id)
    })
  }

  public clickedChat() {

  }
}

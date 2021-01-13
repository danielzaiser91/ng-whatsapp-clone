import Contact from './contact'
import Message from './message'

export default interface Chat {
  type: 'single_chat' | 'group_chat',
  chat_id: number,
  chat: {
    contact: Contact,
    complete_chat: Message[],
    last_message: Message
  },
}

export default interface Message {
  send_by: 0 | 1, // 0 = Kontakt // 1 = ich
  content: string,
  date: Date,
  status: 0 | 1 | 2 | 3 // 0 - nicht gesendet / 1 - gesendet / 2 - angekommen / 3 - gelesen
}

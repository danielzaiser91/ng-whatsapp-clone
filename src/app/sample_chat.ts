export const chat = [
  {
    type: 'single_chat', // single_chat or group_chat
    chat: {
      contact: {
        name: 'Martin',
        tel: '01443757554',
        profile_pic: 'assets\\images\\profile_pictures\\1_martin.jpg', // das Backslash muss hier escaped werden, deshalb "\\" statt "\" im Pfad
        id: 1,
        options: {
          mute_notifications: false,
          block: false,
          // ...
        },
        last_online: new Date(),
        complete_chat: [
          {
            send_by: 1, // 0 = Kontakt // 1 = ich
            message: 'Nur so :)',
            date: new Date('December 07, 2020 18:39:00'),
            status: 3 // 0 - nicht gesendet / 1 - gesendet / 2 - angekommen / 3 - gelesen
          },
          {
            send_by: 0,
            message: 'Nur so :)',
            date: new Date('December 07, 2020 18:39:00'),
            status: 3
          }
        ]
      },
      last_message: {
        send_by: 0,
        message: 'Nur so :)',
        date: new Date('December 07, 2020 18:39:00'),
        status: 3
      }
    }
  }
]

export default interface Contact {
  name: string,
  tel: string,
  profile_pic: string,
  id: number,
  options: {
    mute_notifications: boolean,
    block: boolean,
    //...
  },
  last_online: Date
}

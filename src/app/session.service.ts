import { Injectable } from "@angular/core";
import { addDays } from "date-fns";
import MySession from "./.interfaces/session";
import User from "./.interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session: MySession | undefined;
  constructor() {}

  setSession(user: User) {
    this.session = {
      user: user,
      logged_in_at: new Date(),
      terminate_at: addDays(new Date(), 1)
    };
  }

  getSession() {
    return this.session;
  }
}

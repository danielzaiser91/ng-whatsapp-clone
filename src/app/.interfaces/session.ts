import User from "./user";

export default interface MySession {
  user: User,
  logged_in_at: Date,
  terminate_at: Date,
}

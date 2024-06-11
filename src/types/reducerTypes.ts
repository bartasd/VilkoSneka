interface LoginAttemptState {
  loginAttempt: boolean;
  registerAttempt: boolean;
}

interface UserState {
  user: string;
  // some other logic: roles, picture and so on....
}

interface ServerData {
  _id: string;
  username: string;
  message: string;
  timestamp: string;
}

interface ResponseData {
  data: ServerData[];
}

interface MessageType {
  username: string;
  message: string;
  timestamp: string;
  timestampDate: Date;
}

export type {
  LoginAttemptState,
  UserState,
  ServerData,
  ResponseData,
  MessageType,
};

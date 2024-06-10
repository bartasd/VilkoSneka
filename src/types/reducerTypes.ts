interface LoginAttemptState {
  loginAttempt: boolean;
  registerAttempt: boolean;
}

interface UserState {
  user: string;
  // some other logic: roles, picture and so on....
}

export type { LoginAttemptState, UserState };

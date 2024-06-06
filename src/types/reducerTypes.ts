interface ActionType {
  type: string;
}

interface LoginAttemptState {
  loginAttempt: boolean;
  registerAttempt: boolean;
}

export type { ActionType, LoginAttemptState };

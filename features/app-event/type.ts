export enum AppEvent {
  UserCreated = 'user-created',
}

export type AppEvents = {
  [AppEvent.UserCreated]: [userId: string];
};

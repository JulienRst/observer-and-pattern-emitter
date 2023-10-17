import { AppEmitter } from "features/app-event/emitter";
import { UserRepository } from "./repository";
import { AppEvent } from "features/app-event/type";
import { Logger } from "technical/logger/type";

interface UserServiceConfig {
  userRepository: UserRepository;
  logger: Logger;
  appEmitter: AppEmitter;
}

export class UserService {
  private userRepository: UserRepository;

  private appEmitter: AppEmitter;

  private logger: Logger;

  constructor(config: UserServiceConfig) {
    this.userRepository = config.userRepository;
    this.appEmitter = config.appEmitter;
    this.logger = config.logger;
  }

  public create(name: string) {
    this.logger('UserService', `Creating User with name ${name}`);
    const user = this.userRepository.create(name);
    this.logger('UserService', `Emiting ${AppEvent.UserCreated} with payload : ${user}`);
    this.appEmitter.emit(AppEvent.UserCreated, user);
  }
}
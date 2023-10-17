import { Logger } from "technical/logger/type";

interface UserRepositoryConfig {
  logger: Logger;
}

export class UserRepository {
  private logger: Logger;

  constructor(config: UserRepositoryConfig) {
    this.logger = config.logger;
  }

  public create(name: string): string {
    this.logger('UserRepository', `User with name: ${name} created`);
    return name;
  }
}
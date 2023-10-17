import { Reward } from './type';
import { Logger } from 'technical/logger/type';

export interface RewardRepositoryConfig {
  logger: Logger;
}

export class RewardRepository {

  private logger: Logger;

  constructor(config: RewardRepositoryConfig) {
    this.logger = config.logger;
  }

  public create(user: string, reward: Reward) {
    this.logger('Reward Repositroy', `${reward} reward for user ${user} created`);
  }
}
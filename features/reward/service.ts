import { Reward } from './type';
import { RewardRepository } from "./repository";
import { Logger } from 'technical/logger/type';

interface RewardServiceConfig {
  rewardRepository: RewardRepository;
  logger: Logger;
}

export class RewardService {

  private rewardRepository: RewardRepository;

  private logger: Logger;

  constructor(config: RewardServiceConfig) {
    this.rewardRepository = config.rewardRepository;
    this.logger = config.logger;
  }

  public async create(user: string, reward: Reward) {
    this.logger('RewardService', `Creating reward ${reward} for ${user}`);
    this.rewardRepository.create(user, reward);
  }
}

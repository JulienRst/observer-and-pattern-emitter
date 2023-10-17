import { AppEmitter } from "features/app-event/emitter";
import { RewardService } from "./service";
import { Reward } from "./type";
import { AppEvent } from "features/app-event/type";
import { Logger } from "technical/logger/type";

interface RewardObserverConfig {
  rewardService: RewardService;
  appEmitter: AppEmitter;
  logger: Logger;
}

export class RewardObserver {
  private rewardService: RewardService;

  private appEmitter: AppEmitter;

  private logger: Logger;

  constructor(config: RewardObserverConfig) {
    this.rewardService = config.rewardService;
    this.appEmitter = config.appEmitter;
    this.logger = config.logger;

    this.appEmitter.addListener(
      AppEvent.UserCreated,
      (...args) => this.handleUserCreatedEvent(...args)
    );
  }

  private handleUserCreatedEvent(userId: string) {
    this.logger('RewardObserver', `Just observed ${AppEvent.UserCreated} event`);
    this.logger('RewardObserver', `Will ask RewardService to create ${Reward.Welcome} reward to ${userId}`)
    this.rewardService.create(userId, Reward.Welcome);
  }
}
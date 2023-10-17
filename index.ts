import appEmitter from "features/app-event/emitter";
import { RewardObserver } from "features/reward/observer";
import { RewardRepository } from "features/reward/repository";
import { RewardService } from "features/reward/service";
import { UserRepository } from "features/user/repository";
import { UserService } from "features/user/service";

const logger = (...args: string[]) => console.log(...args);

// First we launch our reward-observer so he can do his job
// Preshot : yes it would be much more readble with Nest,
// But one thing at a time
new RewardObserver({
  rewardService: new RewardService({
    rewardRepository: new RewardRepository({
      logger,
    }),
    logger,
  }),
  appEmitter,
  logger,
})

// Now we create our user service

const userService = new UserService({
  userRepository: new UserRepository({
    logger,
  }),
  appEmitter,
  logger,
});

// Then we add a user
userService.create('John');
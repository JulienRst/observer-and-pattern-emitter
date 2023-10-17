"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emitter_1 = require("features/app-event/emitter");
var repository_1 = require("features/user/repository");
var service_1 = require("features/user/service");
var logger = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, args);
};
// First we launch our reward-observer so he can do his job
// Preshot : yes it would be much more readble with Nest,
// But one things at a time
// new RewardObserver({
//   rewardService: new RewardService({
//     rewardRepository: new RewardRepository({
//       logger,
//     }),
//     logger,
//   }),
//   appEmitter,
//   logger,
// })
// Now we create our user service
var userService = new service_1.UserService({
    userRepository: new repository_1.UserRepository({
        logger: logger,
    }),
    appEmitter: emitter_1.default,
    logger: logger,
});
// Then we add a user
userService.create('John');

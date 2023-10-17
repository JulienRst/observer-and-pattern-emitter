"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardRepository = void 0;
var RewardRepository = /** @class */ (function () {
    function RewardRepository(config) {
        this.logger = config.logger;
    }
    RewardRepository.prototype.create = function (user, reward) {
        this.logger('Reward Repositroy', "".concat(reward, " reward for user ").concat(user, " created"));
    };
    return RewardRepository;
}());
exports.RewardRepository = RewardRepository;

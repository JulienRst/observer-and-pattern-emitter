"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardObserver = void 0;
var type_1 = require("./type");
var type_2 = require("features/app-event/type");
var RewardObserver = /** @class */ (function () {
    function RewardObserver(config) {
        var _this = this;
        this.rewardService = config.rewardService;
        this.appEmitter = config.appEmitter;
        this.logger = config.logger;
        this.appEmitter.addListener(type_2.AppEvent.UserCreated, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.handleUserCreatedEvent.apply(_this, args);
        });
    }
    RewardObserver.prototype.handleUserCreatedEvent = function (userId) {
        this.logger('RewardObserver', "Just observed ".concat(type_2.AppEvent.UserCreated, " event"));
        this.logger('RewardObserver', "Will ask RewardService to create ".concat(type_1.Reward.Welcome, " reward to ").concat(userId));
        this.rewardService.create(userId, type_1.Reward.Welcome);
    };
    return RewardObserver;
}());
exports.RewardObserver = RewardObserver;

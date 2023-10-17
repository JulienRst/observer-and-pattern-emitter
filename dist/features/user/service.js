"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var type_1 = require("features/app-event/type");
var UserService = /** @class */ (function () {
    function UserService(config) {
        this.userRepository = config.userRepository;
        this.appEmitter = config.appEmitter;
        this.logger = config.logger;
    }
    UserService.prototype.create = function (name) {
        this.logger('UserService', "Creating User with name ".concat(name));
        var user = this.userRepository.create(name);
        this.logger('UserService', "Emiting ".concat(type_1.AppEvent.UserCreated, " with payload : ").concat(user));
        this.appEmitter.emit(type_1.AppEvent.UserCreated, user);
    };
    return UserService;
}());
exports.UserService = UserService;

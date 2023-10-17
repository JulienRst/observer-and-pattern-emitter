"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var UserRepository = /** @class */ (function () {
    function UserRepository(config) {
        this.logger = config.logger;
    }
    UserRepository.prototype.create = function (name) {
        this.logger('UserRepository', "User with name: ".concat(name, " created"));
        return name;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;

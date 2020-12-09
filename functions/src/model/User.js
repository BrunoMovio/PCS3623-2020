"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, email, phone, avatar, groupId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.groupId = groupId;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getAvatar = function () {
        return this.avatar;
    };
    User.prototype.getGroupId = function () {
        return this.groupId;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    User.prototype.setAvatar = function (avatar) {
        this.avatar = avatar;
    };
    User.prototype.setGroupId = function (groupId) {
        this.groupId = groupId;
    };
    User.toUserModel = function (user) {
        return new User(user.id, user.name, user.email, user.phone, user.avatar, user.groupId || user.group_id);
    };
    return User;
}());
exports.User = User;

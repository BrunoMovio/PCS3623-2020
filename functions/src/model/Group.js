"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(id, adminId, name, description) {
        this.id = id;
        this.adminId = adminId;
        this.name = name;
        this.description = description;
    }
    Group.prototype.getId = function () {
        return this.id;
    };
    Group.prototype.getName = function () {
        return this.name;
    };
    Group.prototype.getAdminId = function () {
        return this.adminId;
    };
    Group.prototype.getDescription = function () {
        return this.description;
    };
    Group.prototype.setId = function (id) {
        this.id = id;
    };
    Group.prototype.setName = function (name) {
        this.name = name;
    };
    Group.prototype.setAdminId = function (adminId) {
        this.adminId = adminId;
    };
    Group.prototype.setDescription = function (description) {
        this.description = description;
    };
    Group.toGroupModel = function (group) {
        return new Group(group.id, group.admin_id || group.adminId, group.name, group.description);
    };
    return Group;
}());
exports.Group = Group;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageEvent = void 0;
var PageEvent = /** @class */ (function () {
    function PageEvent(id, adminId, pageId, name, description, date, local) {
        this.id = id;
        this.adminId = adminId;
        this.pageId = pageId;
        this.name = name;
        this.description = description;
        this.date = date;
        this.local = local;
    }
    PageEvent.prototype.getId = function () {
        return this.id;
    };
    PageEvent.prototype.getAdminId = function () {
        return this.adminId;
    };
    PageEvent.prototype.getPageId = function () {
        return this.pageId;
    };
    PageEvent.prototype.getName = function () {
        return this.name;
    };
    PageEvent.prototype.getDescription = function () {
        return this.description;
    };
    PageEvent.prototype.getDate = function () {
        return this.date;
    };
    PageEvent.prototype.getLocal = function () {
        return this.local;
    };
    PageEvent.prototype.setId = function (id) {
        this.id = id;
    };
    PageEvent.prototype.setAdminId = function (adminId) {
        this.adminId = adminId;
    };
    PageEvent.prototype.sePageId = function (pageId) {
        this.pageId = pageId;
    };
    PageEvent.prototype.setName = function (name) {
        this.name = name;
    };
    PageEvent.prototype.setDescription = function (description) {
        this.description = description;
    };
    PageEvent.prototype.setDate = function (date) {
        this.date = date;
    };
    PageEvent.prototype.setLocal = function (local) {
        this.local = local;
    };
    PageEvent.toEventModel = function (pageEvent) {
        return new PageEvent(pageEvent.id, pageEvent.admin_id || pageEvent.adminId, pageEvent.page_id || pageEvent.pageId, pageEvent.name, pageEvent.description, pageEvent.date, pageEvent.local);
    };
    return PageEvent;
}());
exports.PageEvent = PageEvent;

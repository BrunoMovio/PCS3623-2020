"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page(id, adminId, name, description, banner) {
        this.id = id;
        this.adminId = adminId;
        this.name = name;
        this.description = description;
        this.banner = banner;
    }
    Page.prototype.getId = function () {
        return this.id;
    };
    Page.prototype.getName = function () {
        return this.name;
    };
    Page.prototype.getAdminId = function () {
        return this.adminId;
    };
    Page.prototype.geDescription = function () {
        return this.description;
    };
    Page.prototype.getBanner = function () {
        return this.banner;
    };
    Page.prototype.setId = function (id) {
        this.id = id;
    };
    Page.prototype.setName = function (name) {
        this.name = name;
    };
    Page.prototype.setDescription = function (description) {
        this.description = description;
    };
    Page.prototype.setAdminId = function (adminId) {
        this.adminId = adminId;
    };
    Page.prototype.setBanner = function (banner) {
        this.banner = banner;
    };
    Page.toPageModel = function (page) {
        return new Page(page.id, page.adminId || page.admin_id, page.name, page.description, page.banner);
    };
    return Page;
}());
exports.Page = Page;

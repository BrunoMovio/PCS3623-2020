"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(id, userId, name, description, image, eventId, groupId, pageId) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.eventId = eventId;
        this.groupId = groupId;
        this.pageId = pageId;
    }
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.getUserId = function () {
        return this.userId;
    };
    Post.prototype.getName = function () {
        return this.name;
    };
    Post.prototype.geDescription = function () {
        return this.description;
    };
    Post.prototype.getImage = function () {
        return this.image;
    };
    Post.prototype.getEventId = function () {
        return this.eventId;
    };
    Post.prototype.getGroupId = function () {
        return this.groupId;
    };
    Post.prototype.getPageId = function () {
        return this.pageId;
    };
    Post.prototype.setId = function (id) {
        this.id = id;
    };
    Post.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    Post.prototype.setName = function (name) {
        this.name = name;
    };
    Post.prototype.setDescription = function (description) {
        this.description = description;
    };
    Post.prototype.setImage = function (image) {
        this.image = image;
    };
    Post.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
    };
    Post.prototype.setGroupId = function (groupId) {
        this.groupId = groupId;
    };
    Post.prototype.setPageId = function (pageId) {
        this.pageId = pageId;
    };
    Post.toPostModel = function (post) {
        return new Post(post.id, post.userId || post.user_id, post.name, post.description, post.image, post.eventId || post.event_id, post.groupId || post.group_id, post.pageId || post.page_id);
    };
    return Post;
}());
exports.Post = Post;

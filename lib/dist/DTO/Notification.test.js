"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = require("./Notification");
describe('Notification', () => {
    it('Should create notification with payload', () => {
        const payload = { p: 'p' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.payload).toEqual(payload);
    });
    it('Should create notification with identifier', () => {
        const payload = { identifier: 'identifier' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.identifier).toEqual(payload.identifier);
    });
    it('Should return title from payload', () => {
        const payload = { title: 'title' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.title).toEqual(payload.title);
    });
    it('Should return body from payload', () => {
        const payload = { body: 'body' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.body).toEqual(payload.body);
    });
    it('Should return sound from payload', () => {
        const payload = { sound: 'sound.mp4' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.sound).toEqual(payload.sound);
    });
    it('Should return badge from payload', () => {
        const payload = { badge: 1 };
        const notification = new Notification_1.Notification(payload);
        expect(notification.badge).toEqual(payload.badge);
    });
    it('Should return type from payload', () => {
        const payload = { type: 'type' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.type).toEqual(payload.type);
    });
    it('Should return thread from payload', () => {
        const payload = { thread: 'thread' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.thread).toEqual(payload.thread);
    });
});

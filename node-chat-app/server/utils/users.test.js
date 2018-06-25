const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '12',
            name: 'John',
            room: 'node'
        }, {
            id: '123',
            name: 'Ken',
            room: 'react'
        }, {
            id: '3',
            name: 'Jen',
            room: 'node'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'sample',
            room: 'sample'
        }
        const resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const user = users.removeUser('123');
        expect(user.id).toBe('123');
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        users.removeUser('123456');
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const user = users.getUser('12');
        expect(user).toEqual(users.users[0]);
    });

    it('should not find user', () => {
        const user = users.getUser('12555');
        expect(user).not.toBeDefined();
    });

    it('should return names for node course', () => {
        const userList = users.getUserList('node');
        expect(userList.length).toBe(2);
        expect(userList).toEqual(['John', 'Jen']);
    });
}); 
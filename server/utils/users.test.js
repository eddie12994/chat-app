const expect = require('expect');
var {Users} = require('./users.js');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Edward',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Evelys',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Eddie',
      room: 'Node Course'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Edward',
      room: 'Test room'
    };

    var response = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userID = '1';
    var user = users.removeUser(userID);

    expect(user.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userID = '5';
    var user = users.removeUser(userID);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userID = '1';
    var user = users.getUser(userID);

    expect(user.id).toBe(userID);
  });

  it('should not find a user', () => {
    var userID = '4';
    var user = users.getUser(userID);

    expect(user).toNotExist();
  });

  it('should get a user from the users array', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Edward', 'Eddie']);
  });

  it('should get a user from the users array', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Evelys']);
  });
});

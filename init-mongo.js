db = db.getSiblingDB('wekan');

db.createUser({
  user: 'wekan',
  pwd: 'wekan',
  roles: [
    { role: 'readWrite', db: 'wekan' }
  ]
});

db.createCollection('users');
db.createCollection('boards');

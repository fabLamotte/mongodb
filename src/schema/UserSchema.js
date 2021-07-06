export const UserSchema = {
    name: 'users',
    properties: {
      _id: 'objectId?',
      name: 'string?',
      password: 'string?'
    },
    primaryKey: '_id'
};
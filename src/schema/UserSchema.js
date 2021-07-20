const UserSchema = {
    name: 'User',
    properties: {
      _id: 'objectId?',
      name: 'string?',
      task:"Task[]",
      photo:"Photo[]"
    },
    primaryKey: '_id'
};

export default UserSchema
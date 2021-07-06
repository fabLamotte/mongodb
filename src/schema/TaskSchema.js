export const TaskSchema = {
    name: 'task',
    embedded:true,
    properties: {
      _id: 'objectId?',
      name: 'string?',
      status: 'string?',
    },
    primaryKey: '_id',
};
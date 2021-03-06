const TaskSchema = {
  name: "Task",
  properties: {
      _id: "objectId",
      _partition: "string",
      name: "string",
      description:"string",
      status:"bool",
  },
  primaryKey: '_id',
  assignee: {
    type: 'linkingObject',
    objectType: 'User',
    property: 'task',
  },
}

export default TaskSchema
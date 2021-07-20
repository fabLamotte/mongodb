const PhotoSchema = {
  name: "Photo",
  properties: {
      _id: "objectId",
      _partition: "string",
      fileName: "string",
      path:"string",
  },
  primaryKey: '_id',
  assignee: {
    type: 'linkingObject',
    objectType: 'User',
    property: 'photo',
  },
}

export default PhotoSchema
import {ObjectId} from 'bson';

type TMessages = {
  text: string;
  _id: ObjectId;
  _partitionKey: ObjectId;
};

class MessageModel {
  _id: ObjectId;
  text: string;
  _partitionKey: ObjectId;
  constructor({text, _id, _partitionKey}: TMessages) {
    this.text = text;
    this._id = _id;
    this._partitionKey = _partitionKey;
  }

  static schema: Realm.ObjectSchema = {
    name: 'messages',
    properties: {
      text: 'string',
      _id: 'objectId',
      _partitionKey: 'string',
    },
    primaryKey: '_id',
  };
}
export {MessageModel};

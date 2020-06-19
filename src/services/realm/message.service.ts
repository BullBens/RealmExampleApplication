import {MessageModel} from '../../models/message.model';

class MessageService {
  public async openRealm(user: Realm.User) {
    let realm;
    try {
      console.log(`Logged in with the user: ${user.identity}`);
      const config = {
        schema: [MessageModel.schema],
        sync: {
          user: user,
          partitionValue: '""',
        },
      };
      console.log(JSON.stringify(config));
      realm = await Realm.open({schema: [MessageModel.schema]});
      return realm;
    } catch (error) {
      console.log('Error!!!');
      throw `Error opening realm: ${JSON.stringify(error)}`;
    }
  }
}

export default new MessageService();

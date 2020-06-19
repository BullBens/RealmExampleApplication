import {appConfig} from '@constants';
import Realm from 'realm';
import {MessageModel} from '../../models/message.model';

class UserService {
  public async anonymousLogin() {
    let user;
    try {
      const app = new Realm.App(appConfig); // pass in the appConfig variable that you created earlier
      const credentials = Realm.Credentials.anonymous(); // create an anonymous credential
      user = await app.logIn(credentials);
      return user;
    } catch (error) {
      throw `Error logging in anonymously: ${JSON.stringify(error, null, 2)}`;
    }
  }
}

export default new UserService();

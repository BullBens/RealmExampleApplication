import React from 'react';
import {useState, useNavigation, useCallback} from '@hooks';
import {View, Text, TextInput, TouchableOpacity} from '@components';
import styles from './styles';
import Realm from 'realm';
import {colors} from '@constants';

const Chat: React.FC<TProps> = () => {
  const {navigate} = useNavigation();
  const [email, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const goToChat = useCallback(() => {
    navigate('Chat', {email});
  }, [email]);

  const auth = useCallback(() => {
    // const authUrl = 'https://myinstance.cloud.realm.io';
    // let creds = Realm.Credentials.emailPassword(email, password).providerName();
    // let login = new Realm.App().logIn(creds);
    // Realm.Sync.User.login(authUrl, creds)
    //   .then((user) => {
    //     // user is logged in
    //     // do stuff ...
    //   })
    //   .catch((error) => {
    //     // an auth error has occurred
    //   });
  }, [email, password]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Enter email</Text>
      <TextInput value={email} onChangeText={(val) => setUserName(val)} style={styles.textInput} />
      <Text style={styles.name}>Enter password</Text>
      <TextInput value={password} onChangeText={(val) => setPassword(val)} style={styles.textInput} />
      <TouchableOpacity onPress={auth} style={[styles.btnStyle]}>
        <Text style={[styles.name, {color: email.length ? colors.red_E50003 : colors.gray_4F4E53}]}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

type TProps = {};

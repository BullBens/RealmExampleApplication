import React from 'react';
import {useState, useCallback, useEffect, useRef, useNavigation} from '@hooks';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  HeaderRight,
  HeaderLeft,
} from '@components';
import styles from './styles';
import {colors} from '@constants';
import userService from '../../services/realm/user.service';
import {ActivityIndicator, Alert} from 'react-native';
import {ObjectId} from 'bson';

type TProps = {
  navigation: any;
};

const Chat: React.FC<TProps> = ({}) => {
  const {setOptions} = useNavigation();
  const refScrollView = useRef<ScrollView | null>(null);
  const [user, setUser] = useState<Realm.User | null>();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any>([]);
  const [realm, setRealm] = useState<Realm | null>(null);

  useEffect(() => {
    userService
      .anonymousLogin()
      .then(async (user) => {
        setOptions({
          headerLeft: () => <HeaderLeft onPress={clear} clear />,
          title: `${user.identity}`,
          headerRight: () => <HeaderRight onPress={logout} logout />,
        });
        setUser(user);
        const config = {
          schema: [
            {
              name: 'messages',
              properties: {
                _id: 'objectId',
                _partitionKey: 'string',
                // userIdentity: 'string',
                text: 'string?',
              },
              primaryKey: '_id',
            },
          ],
          sync: {
            user: user,
            partitionValue: '""',
          },
        };
        let realm = await Realm.open(config);
        setMessages(realm.objects('messages').sorted('_id'));
        setRealm(realm);
      })
      .catch((err) => {
        console.log(`Error: ${JSON.stringify(err)}`);
      });

    return () => {};
  }, []);

  useEffect(() => {
    if (realm != null && refScrollView) {
      realm.addListener('change', () => {
        setMessages(realm.objects('messages').sorted('_id'));
      });
    }
  }, [realm, refScrollView]);

  useEffect(() => {
    refScrollView.current?.scrollToEnd();
  }, [messages, refScrollView]);

  const sendMessage = useCallback(() => {
    realm?.write(() => {
      realm.create('messages', {
        _id: new ObjectId(),
        _partitionKey: '',
        text: message,
        // userIdentity: user?.identity,
      });
    });
    setMessage('');
  }, [message, user]);

  const logout = useCallback(() => {
    realm?.write(() => {
      realm?.close();
    });
  }, [realm]);
  const clear = useCallback(() => {
    if (realm != null) {
      realm.write(() => {
        let allMessages = realm.objects('messages');
        realm.delete(allMessages);
      });
    }
  }, []);

  return (
    <KeyboardAvoidingView behavior={'height'} style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        {realm == null ? (
          <ActivityIndicator size="large" color={colors.red_E50003} />
        ) : (
          <>
            <ScrollView ref={refScrollView} style={styles.container}>
              {messages.map((el: any, index: number) => (
                <Text key={index} style={{color: 'red', fontSize: 20}}>
                  {el.text}
                </Text>
              ))}
            </ScrollView>
            <View style={styles.createNewUserView}>
              <TextInput onChangeText={(val) => setMessage(val)} value={message} style={styles.textInput} />
              <TouchableOpacity disabled={!message.length} style={styles.btnStyle} onPress={sendMessage}>
                <Text style={[styles.name, {color: message.length ? colors.red_E50003 : colors.white_FFFFFF}]}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Chat;

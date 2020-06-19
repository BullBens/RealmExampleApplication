import React from 'react';
import {useState, useNavigation, useCallback} from '@hooks';
import {View, Text, TextInput, TouchableOpacity} from '@components';
import styles from './styles';
import {colors} from '@constants';

const Chat: React.FC<TProps> = () => {
  const {navigate} = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const goToChat = useCallback(() => {
    navigate('Chat', {userName});
  }, [userName]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Enter username</Text>
      <TextInput value={userName} onChangeText={(val) => setUserName(val)} style={styles.textInput} />
      <TouchableOpacity onPress={goToChat} style={[styles.btnStyle]}>
        <Text style={[styles.name, {color: userName.length ? colors.red_E50003 : colors.gray_4F4E53}]}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

type TProps = {};

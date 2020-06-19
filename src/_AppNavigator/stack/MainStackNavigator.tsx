import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackOptions} from '../options';
import {useTranslation} from '@hooks';
import {Main, Chat} from '@screens';

export const MainStackNavigator = () => {
  const {t} = useTranslation();
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator screenOptions={defaultStackOptions}>
      <MainStack.Screen
        options={{
          headerShown: true,
          title: 'Realm',
        }}
        component={Main}
        name={'Main'}
      />
      <MainStack.Screen
        options={{
          headerShown: true,
          title: 'Realm',
        }}
        component={Chat}
        name={'Chat'}
      />
    </MainStack.Navigator>
  );
};

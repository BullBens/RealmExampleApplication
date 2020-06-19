import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackOptions} from '../options';
import {useTranslation} from '@hooks';
import {Profile} from '@screens';

export const ProfileStackNavigator = () => {
  const {t} = useTranslation();
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator screenOptions={defaultStackOptions}>
      <ProfileStack.Screen
        options={{
          headerShown: false,
          title: t(''),
        }}
        component={Profile}
        name={'Profile'}
      />
    </ProfileStack.Navigator>
  );
};

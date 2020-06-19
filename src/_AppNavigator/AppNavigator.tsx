import React, {FC} from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routeNavigatorScreenOptions, tabBarScreenOptionsHandler, tabBarOptions} from './options';
import {useTranslation, useEffect} from '@hooks';
import SplashScreen from 'react-native-splash-screen';
import {routes} from '@constants';
import {MainStackNavigator} from './stack';

enableScreens();
const RootStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const {t} = useTranslation();

  return (
    <MainTabs.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={(val) => {
        return tabBarScreenOptionsHandler({
          navigation: val.navigation,
          route: val.route,
        });
      }}
    >
      <MainTabs.Screen
        component={MainStackNavigator}
        options={{
          tabBarLabel: t('Chat'),
        }}
        name={routes.MAIN_STACK_NAVIGATOR}
      />
    </MainTabs.Navigator>
  );
};

const AppNavigator: FC<any> = ({}, ref) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={ref}>
      <RootStack.Navigator screenOptions={routeNavigatorScreenOptions}>
        <RootStack.Screen name={routes.MAIN_NAVIGATOR} component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default React.forwardRef(AppNavigator);

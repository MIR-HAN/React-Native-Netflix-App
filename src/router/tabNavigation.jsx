import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FAVORITES, HOME } from '../utils/routes';
import Home from '../screens/home';
import Favorites from '../screens/favorites';
import { aplicationColors, appColors } from '../theme/color';
import TabIcon from '../components/route/tabIcon';
import { View,Text } from 'react-native';
import Header from '../components/header/header';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => (
        <TabIcon
          focused={focused}
          color={color}
          size={size}
          iconName={route?.name}
          route={route}
        />
      ),
      tabBarStyle: {
        backgroundColor: aplicationColors.PRIMARY,
      },
      tabBarActiveTintColor: aplicationColors.WHITE,
      tabBarInactiveTintColor: aplicationColors.GRAY,
      
      header: () => (
        <Header/>
      )
      
    })}
    >
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
    </Tab.Navigator>
  );
};


export default TabNavigation;
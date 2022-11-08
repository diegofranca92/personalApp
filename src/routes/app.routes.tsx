import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {List} from '../components/List';
import {Home} from '../components/Home';

export function AppRoutes() {
  const {Screen, Navigator} = createMaterialBottomTabNavigator();

  return (
    // <SafeAreaView style={backgroundStyle}>

    // </SafeAreaView>
    <Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465">
      <Screen
        name="new"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home-variant' : 'home-variant-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Screen
        name="list"
        component={List}
        options={{
          tabBarLabel: 'Minhas Experiências',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'file-tree' : 'file-tree-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Navigator>
  );
}

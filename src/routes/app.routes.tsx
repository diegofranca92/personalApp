import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {List} from '../pages/List';
import {Form} from '../pages/Form';
import {Home} from '../pages/Home';
import {Icon, IconButton} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export function AppRoutes() {
  const {Screen, Navigator} = createBottomTabNavigator();
  const {goBack} = useNavigation();

  return (
    // <SafeAreaView style={backgroundStyle}>

    // </SafeAreaView>
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f0edf6',
        tabBarInactiveTintColor: '#949494',
        tabBarStyle: {
          backgroundColor: '#2d47d8',
          height: 60,
          borderTopWidth: 0,
          position: 'absolute',
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MCIcon
              name={focused ? 'home-variant' : 'home-variant-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Screen
        name="new"
        options={{
          headerShown: true,
          tabBarButton: () => null,
          headerStyle: {
            backgroundColor: '#333333',
          },
          headerTintColor: 'white',
          headerTitle: 'Novo Cadastro',
          headerLeft: () => (
            <IconButton
              onPress={goBack}
              icon={
                <Icon as={MCIcon} name="arrow-left" color={'white'} size="lg" />
              }
            />
          ),
        }}
        component={Form}
      />
      <Screen
        name="list"
        component={List}
        options={{
          tabBarLabel: 'Minhas Experiências',
          tabBarIcon: ({color, focused}) => (
            <MCIcon
              name={focused ? 'file-tree' : 'file-tree-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Navigator>
  );
}

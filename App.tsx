/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
      contentContainerStyle={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          padding: 20,
        }}>
        <Text style={[styles.sectionTitle]}>
          Novo Cadastro{' '}
          <MaterialCommunityIcons name="home" color="#fff" size={26} />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Profissão"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Empresa"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Periodo"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Descrição"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Skills"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Projetos"
        />
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
          accessibilityLabel="Learn more about this purple button">
          <Text>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
          accessibilityLabel="Learn more about this purple button">
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function TabConfig() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={[styles.sectionTitle]}>Configs</Text>
      </View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Config"
          component={TabConfig}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 120,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  button: {
    marginBottom: 12,
    backgroundColor: '#841584',
    padding: 12,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 16,
  },
});

export default App;

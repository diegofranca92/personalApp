import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRoutes} from './app.routes';
import {NativeBaseProvider, extendTheme} from 'native-base';

export function Routes() {
  const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
  const theme = extendTheme({colors: newColorTheme});
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <AppRoutes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

import React from 'react';

import Home from './views/home';
import Target from './views/target';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="target" component={Target} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}


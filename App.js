import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import PenyakitScreen from './app/screens/PenyakitScreen';
import SharingScreen from './app/screens/SharingScreen';
import ObatScreen from './app/screens/ObatScreen';
import ProfilScreen from './app/screens/ProfilScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PenyakitScreen" component={PenyakitScreen} />
        <Stack.Screen name="SharingScreen" component={SharingScreen} />
        <Stack.Screen name="ObatScreen" component={ObatScreen} />
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
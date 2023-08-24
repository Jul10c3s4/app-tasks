import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/pages/home';
import { LoginPage } from './src/pages/loginPage';
import { InitialPage } from './src/pages/initialPage';
import { RegisterPage } from './src/pages/register';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name='InitialPage' component={InitialPage}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



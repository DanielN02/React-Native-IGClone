import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import LoginScreen from './LoginScreen'


const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)
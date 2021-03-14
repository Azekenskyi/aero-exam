import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignInScreen from '../screens/SignInScreen'
import HeaderMainTitle from './HeaderMainTitle';
import { BottomTabNavigation } from './BottomTabNavigation';

const Stack = createStackNavigator();

export function AppNavigation () {
  return (
    <Stack.Navigator 
      initialRouteName='SignIn'
      screenOptions={{
        headerBackTitleVisible: null
      }}
    >
      <Stack.Screen 
        name='SignIn' 
        component={SignInScreen}
        options={{
          headerShown: null
        }}
      />
      <Stack.Screen
        name='Main'
        component={BottomTabNavigation}
        options={{
          headerTitle: () => <HeaderMainTitle />,
          headerStatusBarHeight: 40
        }}
      />
    </Stack.Navigator>
  )
}
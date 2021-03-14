import React from 'react'
import { Image, StyleSheet } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MainScreen from '../screens/MainScreen'

import QuestionScreen from '../screens/QuestionScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
  <Tab.Navigator>
      <Tab.Screen
        name="Exam"
        component={MainScreen}
        options={{
          tabBarLabel: "Экзамены",
          tabBarIcon: () => <Image style={styles.image} source={require(('../../assets/folder.png'))}/>
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={QuestionScreen}
        options={{
          tabBarLabel: "FAQ",
          tabBarIcon: () => <Image style={styles.image} source={require(('../../assets/FAQ.png'))}/>
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MainScreen}
        options={{
          tabBarLabel: "Настройки",
          tabBarIcon: () => <Image style={styles.image} source={require(('../../assets/settings.png'))}/>
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25
  }
})


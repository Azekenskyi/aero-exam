import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 

export default function HeaderMainTitle() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Главная</Text>
        <View style={styles.iconItems}>
          <AntDesign 
            name="qrcode" 
            size={24} 
            color="black" 
          />
          <AntDesign 
            name="search1"
            size={24} 
            color="black" 
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1
  },
  title: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 34,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconItems: {
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    marginLeft: 17
  }
})
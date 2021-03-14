import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Exam = ({exam}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.infoSubject}>
        <Text style={styles.title}>{exam.subject}</Text>
        <View>
          <View style={styles.item}>
            <Ionicons name="time" size={16} color="#0976F4" />
            <Text style={styles.info}>{exam.time}</Text>
          </View>
          <View style={styles.item}>
            <Entypo name="calendar" size={16} color="#0976F4" />
            <Text style={styles.info}>{exam.date}</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome name="question-circle" size={16} color="#0976F4" />
            <Text style={styles.info}>{exam.questions}</Text>
          </View>
        </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonTitle}>
              Начать
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30
  },
  wrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    backgroundColor: '#ECF1F4',
    borderRadius: 16,
    height: 146,
    marginBottom: 24
  },
  infoSubject: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8
  },
  title: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22
  },
  info: {
    marginLeft: 7,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 7
  },
  button: {
    backgroundColor: '#0861C7',
    borderRadius: 32,
    width: 112,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 18,
    color: '#fff'
  }
})
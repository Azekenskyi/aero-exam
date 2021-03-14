import React from 'react'
import { 
  FlatList,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Exam } from '../components/Exam';

export default function MainScreen() {
  const DATA = [
    {
      id: 1,
      subject: 'Математика',
      date: '25.03.2021',
      time: '14:00 - 17:00',
      questions: '18 вопросов'
    },
    {
      id: 2,
      subject: 'Математика',
      date: '25.03.2021',
      time: '14:00 - 17:00',
      questions: '18 вопросов'
    },
    {
      id: 3,
      subject: 'Математика',
      date: '25.03.2021',
      time: '14:00 - 17:00',
      questions: '18 вопросов'
    },
    {
      id: 4,
      subject: 'Математика',
      date: '25.03.2021',
      time: '14:00 - 17:00',
      questions: '18 вопросов'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Экзамены</Text>
      <View>
        <FlatList 
          data={DATA}
          keyExtractor={exam => exam.id.toString()}
          renderItem={({item}) => <Exam exam={item} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 30,
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 22
  }
})
import React from 'react';
import { 
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Text
} from 'react-native';

export default function SignInScreen({navigation : {navigate}}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo_aero-02.png')} />
      </View>
      <ImageBackground style={styles.image} source={require('../../assets/image69.png')}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.signInProctor}
            onPress={() => navigate('Main')}
          >
            <Text style={styles.buttonProctor}>
              Войти (я проктор)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInStudent}>
            <Text>
              Войти (я студент)
            </Text>
          </TouchableOpacity>
          <Button title='Scan QR' />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 125,
    height: 44
  },
  image: {
    height: '100%',
    width: '100%'
  },
  content: {
    paddingTop: 151,
    display: 'flex',
    paddingLeft: 75,
    paddingRight: 75
  },
  signInProctor : {
    width: 224,
    height: 48,
    backgroundColor: '#0861C7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  signInStudent : {
    width: 224,
    height: 48,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 24
  },
  buttonProctor: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#fff'
  }
});

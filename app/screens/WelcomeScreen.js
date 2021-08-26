import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.container}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 80
  },
  logo: {
    height: 100,
    width: 100
  },
  logoText: {
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: '600'
  }
})

export default WelcomeScreen

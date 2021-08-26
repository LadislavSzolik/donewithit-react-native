import React from 'react'
import { View, StyleSheet, SafeAreaView, Image } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <MaterialCommunityIcons name="close" color={colors.white} size={40} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={40}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../assets/chair.jpg')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  img: {
    width: '100%',
    height: '100%'
  }
})

export default ViewImageScreen

import React from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, View } from 'react-native'

function Screen({ children, style }) {
  /* SafeArea has no horizontal padding, that's why we need the View */
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  container: {
    flex: 1
  }
})

export default Screen

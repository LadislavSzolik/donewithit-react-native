import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'

function AppButton({ title, color = 'primary', onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  label: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})

export default AppButton

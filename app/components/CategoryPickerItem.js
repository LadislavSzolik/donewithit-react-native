import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

function CategoryPickerItem({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%'
  },
  label: {
    marginTop: 5,
    textAlign: 'center'
  }
})

export default CategoryPickerItem

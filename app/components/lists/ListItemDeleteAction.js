import React from 'react'
import { StyleSheet, Pressable } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

function ListItemDeleteAction({ onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ListItemDeleteAction

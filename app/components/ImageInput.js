import React, { useEffect } from 'react'
import { View, StyleSheet, Image, Pressable, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) alert('You need to enable permission')
  }

  const handlePress = async () => {
    if (!imageUri) selectImage()
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' }
      ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log('error reading an image', error)
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ImageInput

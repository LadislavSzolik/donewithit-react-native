import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/lists/ListItem'
import colors from '../config/colors'
import { Image } from 'react-native-expo-image-cache'

function ListingDetailsScreen({ route }) {
  const listing = route.params
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={listing.images[0].thumbnailUrl}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamdena"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen

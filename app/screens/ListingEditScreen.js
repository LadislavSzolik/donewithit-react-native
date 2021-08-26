import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import listingsApi from '../api/listings'

import Screen from '../components/Screen'

import {
  AppForm,
  SubmitButton,
  AppFormField,
  AppFormPicker,
  AppFormImagePicker
} from '../components/forms'

import CategoryPickerItem from '../components/CategoryPickerItem'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
  images: Yup.array().min(1, 'Please select atleast one image.')
})

const categories = [
  {
    label: 'Furniture',
    value: 0,
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp'
  },
  {
    label: 'Cars',
    value: 1,
    backgroundColor: '#fd9644',
    icon: 'car'
  },
  {
    label: 'Cameras',
    value: 2,
    backgroundColor: '#fed330',
    icon: 'camera'
  },
  {
    label: 'Games',
    value: 3,
    backgroundColor: '#26de81',
    icon: 'cards'
  },
  {
    label: 'Clothing',
    value: 4,
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel'
  },
  {
    label: 'Sports',
    value: 5,
    backgroundColor: '#45aaf2',
    icon: 'basketball'
  },
  {
    label: 'Movies & Music',
    value: 6,
    backgroundColor: '#4b7bec',
    icon: 'headphones'
  }
]

function ListingEditScreen(props) {
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    )

    if (!result.ok) {
      setUploadVisible(false)
      return alert('Could not save the listing')
    }

    resetForm()
  }
  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />

        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          width={200}
          maxLength={8}
          name="price"
          keyboardType="number-pad"
          placeholder="Price"
        />

        <AppFormPicker
          width="50%"
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default ListingEditScreen

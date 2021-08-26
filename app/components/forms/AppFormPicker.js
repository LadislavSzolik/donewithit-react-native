import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppPicker from '../AppPicker'

function AppFormPicker({
  name,
  width,
  numberOfColumns,
  PickerItemComponent,
  ...otherProps
}) {
  const { values, errors, touched, setFieldValue } = useFormikContext()
  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        width={width}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker

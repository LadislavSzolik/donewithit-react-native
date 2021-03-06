import React, { useContext, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import jwtDecode from 'jwt-decode'
import {
  AppFormField,
  SubmitButton,
  AppForm,
  ErrorMessage
} from '../components/forms'

import autApi from '../api/auth'
import AuthContext from '../auth/context'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
  const authContext = useContext(AuthContext)
  const [logingFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await autApi.login(email, password)

    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    const user = jwtDecode(result.data)
    authContext.setUser(user)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={logingFailed}
        />

        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})

export default LoginScreen

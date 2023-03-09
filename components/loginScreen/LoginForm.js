import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
// import Validator from 'email-validator'



const LoginForm = ({navigation}) => {
    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('A email is required'),
        password: Yup.string()
          .required()
          .min(6, 'Password needs to be at least 6 characters long'),
      })
    

  return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => onLogin(values.email, values.password)}
        validationSchema={loginFormSchema}
        validateOnMount={true}
      >
           {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
        <>
        <View style={styles.inputField}>
      <TextInput
         placeholderTextColor="#444"
         placeholder="Phone Number, username, or email"
         autoCapitalize="none"
         keyboardType="email-address"
         textContentType="emailAddress"
         autoFocus={true}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
      />
      </View>
      <View style={[styles.inputField,
//    {
//     borderColor:
//       values.email.length < 1 || Validator.validate(values.email)
//         ? '#ccc'
//         : 'red',
//   },
    ]}>
      <TextInput
       placeholderTextColor="#444"
       placeholder="Password"
       autoCapitalize="none"
       textContentType="password"
       autoCorrect={false}
       secureTextEntry={true}
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password} 
      />
      </View>
      <View style={{alignItems: 'flex-end', marginBottom:30}}>
        <Text style={{color:'#6BB0F5'}}>Forgot password?</Text>
      </View>
      <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}
              disabled={!isValid}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.push('SignUpScreen')}>
            <Text style={{color: '#6BB0F5'}}> Sign Up</Text>
        </TouchableOpacity> 
      </View>
      </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
      marginTop: 80,
    },
    inputField: {
      borderRadius: 4,
      padding: 12,
      backgroundColor: '#FAFAFA',
      marginBottom: 10,
      borderWidth: 1,
    },
    button: isValid =>({
      backgroundColor: isValid ? '#0096f6': '#9ACAF7',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 42,
      borderRadius: 4,
    }),
    buttonText: {
      color: 'white',
      fontWeight: 600,
      fontSize: 20,
    },
    signupContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 50,
      justifyContent: 'center',
    },
  })

export default LoginForm
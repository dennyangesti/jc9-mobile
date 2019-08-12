import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Button, Text, Form, Item, Input, Label } from 'native-base'
import { connect } from 'react-redux'

import Fire from '../firebase/index'
import { onLogin } from '../store/actions/index'

class AuthScreen extends Component {

   state = {
      email: '',
      password: ''
   }

   authRegister = async () => {
      let email = this.state.email
      let password = this.state.password

      //REGISTER
      if (password.length < 6) {
         alert('Password harus minimal 6 karakter')
      } else {
         let res = await Fire.auth()
            .createUserWithEmailAndPassword(email, password)

         this.props.onLoginUser(
            res.user.uid,
            res.user.email
         )
      }

   }

   pindahScreen = () => {
      this.props.navigation.navigate('Main')
   }

   render() {
      return (
         <Container>
            <Form>
               <Item stackedLabel>
                  <Label>Email</Label>
                  <Input onChangeText={(input) => this.setState({ email: input })} />
               </Item>
               <Item stackedLabel last>
                  <Label>Password</Label>
                  <Input secureTextEntry onChangeText={(input) => this.setState({ password: input })} />
               </Item>
            </Form>
            <Button onPress={this.authRegister} style={styles.button}>
               <Text>Register</Text>
            </Button>
         </Container>
      )
   }
}

const styles = StyleSheet.create(
   {
      button: {
         width: 100,
         height: 50,
         backgroundColor: 'rgb(0, 196, 0)',
         borderRadius: 25,
         marginTop: 20
      }
   }
)

const mapDispatchToProps = dispatch => {
   return {
      onLoginUser: (uid, email) => {
         dispatch(onLogin(uid, email))
      }
   }
}

export default connect(null, mapDispatchToProps)(AuthScreen)
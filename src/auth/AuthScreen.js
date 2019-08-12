import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Button, Text, Form, Item, Input, Label } from 'native-base'
import Fire from '../firebase/index'

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

         console.log(res.user.email)
         console.log(res.user.uid)
      }

   }

   pindahScreen = () => {
      this.props.navigation.navigate('Main')
   }

   render() {
      return (
         <Container>
            <Form>
               <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={(input) => this.setState({ email: input })} />
               </Item>
               <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input secureTextEntry onChangeText={(input) => this.setState({ password: input })} />
               </Item>
            </Form>
            <Button onPress={this.authRegister}>
               <Text>Register</Text>
            </Button>
         </Container>
      )
   }
}

export default AuthScreen
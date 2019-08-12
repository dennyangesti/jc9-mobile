import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Button, Text, Form, Item, Input, Label, Card, CardItem, Content } from 'native-base'
import { connect } from 'react-redux'

import Fire from '../firebase/index'
import { onLogin } from '../store/actions/index'

class AuthScreen extends Component {

   state = {
      email: '',
      password: '',
      confirm: '',
      login: true
   }

   onSwitch = () => {
      this.setState({ login: !this.state.login })
   }

   componentDidMount() {
      // Cek apakah ada user yang sedang login
      Fire.auth().onAuthStateChanged((user) => {
         // Jika user ditemukan
         if (user) {
            // Login ke redux
            this.props.onLoginUser(
               user.uid, user.email
            )

            // Pindah ke Home
            this.props.navigation.navigate('Main')
         }
      })
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

         this.props.navigation.navigate('MainTab')
      }

   }

   pindahScreen = () => {
      this.props.navigation.navigate('Main')
   }

   render() {
      // Render register
      if (!this.state.login) {
         return (
            <Container style={styles.container}>
               <Text style={styles.title}>Registration Form</Text>
               <Content padder style={{ width: 400 }}>
                  <Card style={{ backgroundColor: 'navy' }}>
                     <CardItem>
                        <Form style={{ width: 320 }}>
                           <Item stackedLabel>
                              <Label>Email</Label>
                              <Input onChangeText={(input) => this.setState({ email: input })} />
                           </Item>
                           <Item stackedLabel last>
                              <Label>Password</Label>
                              <Input secureTextEntry onChangeText={(input) => this.setState({ password: input })} />
                           </Item>
                           <Item stackedLabel last>
                              <Label>Confirm Password</Label>
                              <Input secureTextEntry onChangeText={(input) => this.setState({ password: input })} />
                           </Item>
                        </Form>
                     </CardItem>
                     <CardItem>
                        <Button onPress={this.authRegister} style={styles.button}>
                           <Text style={styles.text}>Register</Text>
                        </Button>
                     </CardItem>
                     <CardItem>
                        <Text onPress={this.onSwitch} style={styles.textlink}>Already have an account? Login here</Text>
                     </CardItem>
                  </Card>
               </Content>
            </Container>
         )
      } else {
         // Render Login
         return (
            <Container style={styles.container}>
               <Text style={styles.title}>Login</Text>
               <Content padder style={{ width: 400 }}>
                  <Card style={{ backgroundColor: 'navy' }}>
                     <CardItem>
                        <Form style={{ width: 320 }}>
                           <Item stackedLabel>
                              <Label>Email</Label>
                              <Input onChangeText={(input) => this.setState({ email: input })} />
                           </Item>
                           <Item stackedLabel last>
                              <Label>Password</Label>
                              <Input secureTextEntry onChangeText={(input) => this.setState({ password: input })} />
                           </Item>
                        </Form>
                     </CardItem>
                     <CardItem>
                        <Button onPress={this.authRegister} style={styles.button}>
                           <Text style={styles.text}>Login</Text>
                        </Button>
                     </CardItem>
                     <CardItem>
                        <Text onPress={this.onSwitch} style={styles.textlink}>Create an account here!</Text>
                     </CardItem>
                  </Card>
               </Content>
            </Container>
         )
      }
   }
}

const styles = StyleSheet.create(
   {
      container: {
         flexDirection: 'column',
         alignItems: "center",
         justifyContent: 'center',
      },
      button: {
         width: 340,
         height: 50,
         backgroundColor: 'rgb(0, 196, 0)',
         borderRadius: 10,
         marginTop: 20,
      },
      title: {
         fontSize: 25,
         fontWeight: 'bold',
         textTransform: 'uppercase',
         marginTop: 50
      },
      text: {
         marginLeft: 120
      },
      textlink: {
         marginTop: 0,
         marginLeft: 10,
         color: 'blue',
         fontSize: 15
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
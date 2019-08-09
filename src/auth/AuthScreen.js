import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Button, Text } from 'native-base'

class AuthScreen extends Component {

   pindahScreen = () => {
      this.props.navigation.navigate('Main')
   }

   render() {
      return (
         <Container>
            <Button onPress={this.pindahScreen}>
               <Text>
                  Back
               </Text>
            </Button>
            <Text>AuthScreen</Text>
         </Container>
      )
   }
}

export default AuthScreen
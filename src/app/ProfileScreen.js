import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'
import { connect } from 'react-redux'

import { onLogout } from '../store/actions/index'
import Fire from '../firebase/index'

class ProfileScreen extends Component {

   onPressLogout = async () => {
      // Logout dari firebase
      await Fire.auth().signOut()

      // Logout dari redux
      this.props.onLogout()

      // Kembali ke halaman register
      this.props.navigation.navigate('Auth')
   }

   render() {
      return (
         <View>
            <Text>ProfileScreen</Text>
            <Button onPress={this.onPressLogout}>
               <Text>Logout</Text>
            </Button>
         </View>
      )
   }
}

export default connect(null, { onLogout })(ProfileScreen)
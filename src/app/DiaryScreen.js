import React, { Component } from 'react'
import { View, BackHandler } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Button, Text } from 'native-base'

class DiaryScreen extends Component {

   onBackButton = () => {
      alert('Tombol back di tekan')
      // Menonaktifkan default function (kembali ke halaman sebelumnya)
      return true
   }

   render() {
      return (
         <View>
            <NavigationEvents
               // ComponentDidMount
               onDidFocus={() => {
                  BackHandler.addEventListener('hardwareBackPress', this.onBackButton)
               }}

               // ComponentWillUnmount
               onWillBlur={() => {
                  BackHandler.removeEventListener('hardwareBackPress', this.onBackButton)
               }}
            />

            <Text>DiaryScreen</Text>

            <Button>
               <Text>Add Diary</Text>
            </Button>
         </View>
      )
   }
}

export default DiaryScreen
import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableNativeFeedback,
   TouchableOpacity,
   Image,
   StyleSheet,
   ImageBackground
} from 'react-native'

class DiaryScreen extends Component {
   render() {
      return (
         <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/65/63/b4/6563b4c0793cf215042bb18de7966a54.jpg' }} style={{ width: 395, height: 800 }}>
               <Image source={{ uri: 'https://i.ibb.co/9rmNPyy/subur.jpg' }} style={styles.img} />
               <Text style={styles.call}>
                  Phone call from,
             </Text>
               <Text style={styles.nama}> Wulan</Text>
               <TouchableNativeFeedback>
                  <View style={styles.button}>
                     <Text style={styles.text}>answer</Text>
                  </View>
               </TouchableNativeFeedback>

               <TouchableOpacity>
                  <View style={styles.button2}>
                     <Text style={styles.text}>decline</Text>
                  </View>
               </TouchableOpacity>
            </ImageBackground>
         </View>
      )
   }
}

const styles = StyleSheet.create(

   {
      container: {
         // column untuk kebawah, row untuk kesamping (default: column)
         flexDirection: 'column',
         alignItems: "center",
         justifyContent: 'center',

      },

      img: {
         borderRadius: 100,
         width: 180,
         height: 180,
         marginTop: 120,
         marginLeft: 105
      },

      button: {
         width: 350,
         height: 50,
         backgroundColor: 'rgb(0, 196, 0)',
         borderRadius: 15,
         marginLeft: 20,
         marginTop: 135
      },

      button2: {
         width: 350,
         height: 50,
         backgroundColor: 'rgb(245, 76, 76)',
         borderRadius: 15,
         marginTop: 15,
         marginLeft: 20,
         marginBottom: 50
      },

      text: {
         color: "white",
         fontSize: 20,
         textAlign: 'center',
         marginTop: 10,
         textTransform: 'uppercase',
         fontWeight: "bold"
      },

      call: {
         fontSize: 15,
         marginTop: 15,
         marginLeft: 140,
         color: "white"
      },

      nama: {
         fontWeight: 'bold',
         textTransform: 'uppercase',
         fontSize: 60,
         marginLeft: 90,
         color: "white"
      }

   }

)


export default DiaryScreen
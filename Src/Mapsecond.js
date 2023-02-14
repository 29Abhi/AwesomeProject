import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Leftarrow from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
import Ambulance from 'react-native-vector-icons/Fontisto';
import Seat from 'react-native-vector-icons/MaterialCommunityIcons';

const Mapsecond = ({navigation}) => {

    const firstpress = (presstype) => {
        console.log(presstype)
    }

    const nextpage = () => {
      navigation.navigate('Detailambu')
    }

  return (
    <SafeAreaView>
          <TouchableOpacity
   onPress={() =>{
        navigation.navigate('Map')
      }} >
      <Leftarrow  style={[styles.arrowdesign]}    name='arrowleft' />
      </TouchableOpacity>
      <Text style={styles.head} >Book an Ambulance</Text>
        <MapView
        style={styles.map}
    initialRegion={{
      latitude: 22.363848,
      longitude: 82.734840,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  <Pressable onPress={() => firstpress("press")}
  style={({pressed}) =>[
    {
    backgroundColor : pressed ? "#e0ecfa" : "white",
    height: 80

    }
  ]} >
 <Ambulance style={styles.ambu}  name='ambulance' />
 <Text style={styles.headambu} >Type 1 Ambulance</Text>
 <Seat style={styles.seat} name='seat' />
 <Text style={styles.seatno} >2 Seat</Text>
 <Text style={styles.price} >#2500</Text>
  </Pressable>
  <Pressable onPress={() => firstpress("press")}
  style={({pressed}) =>[
    {
    backgroundColor : pressed ? "#e0ecfa" : "white",
    height: 80

    }
  ]} >
 <Ambulance style={styles.ambu}  name='ambulance' />
 <Text style={styles.headambu} >Type 2 Ambulance</Text>
 <Seat style={styles.seat} name='seat' />
 <Text style={styles.seatno} >2 Seat</Text>
 <Text style={styles.price} >#2800</Text>
  </Pressable>
  <Pressable onPress={() => firstpress("press")}
  style={({pressed}) =>[
    {
    backgroundColor : pressed ? "#e0ecfa" : "white",
    height: 80

    }
  ]} >
 <Ambulance style={styles.ambu}  name='ambulance' />
 <Text style={styles.headambu} >Type 3 Ambulance</Text>
 <Seat style={styles.seat} name='seat' />
 <Text style={styles.seatno} >2 Seat</Text>
 <Text style={styles.price} >#3000</Text>
  </Pressable>
  <Pressable onPress={nextpage} style={[styles.btn, styles.commonstyle ]}  >
      <Text style={[styles.text, styles.commonstyle]}>Sign up</Text>
    </Pressable>
    </SafeAreaView>
  )
}

export default Mapsecond

const styles = StyleSheet.create({
    mapview : {
        justifyContent: "center",
        textAlign: "center",
          },
          map : {
              height: 290,
              marginTop: 20
          },
          arrowdesign :{
              marginTop: 70,
              marginLeft: 10,
              fontSize: 30,
          }, 
          head : {
            textAlign: "center",
            marginTop: -34,
            fontSize: 24
        },
        ambu : {
            fontSize: 30,
            color: "grey",
            marginTop: 20,
            marginLeft: 20
        },
        headambu : {
            fontSize: 20,
            marginTop: -35,
            marginLeft: 80
        },
        seat : {
            fontSize: 16,
            color: "lightblue",
            marginLeft: 80,
            marginTop: 8
        },
        seatno : {
            fontSize: 14,
            marginLeft: 100,
            marginTop : -19

        },
        price : {
            fontSize: 20,
            marginLeft: 270,
            marginTop: -40
        },
        btn:{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 2,
            borderRadius: 6,
            elevation: 3,
            backgroundColor: 'red',
            width: 270,
            marginTop: 40,
            marginHorizontal: 45
          },
        
})
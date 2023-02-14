import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Leftarrow from 'react-native-vector-icons/AntDesign';
import Rightarrow from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import Search from 'react-native-vector-icons/AntDesign';

const Map = ({navigation}) => {
  
    const onChangeText = () => {

    }
    const text = () =>{

    }
  return (
    <SafeAreaView  style={styles.mapview}>
      <TouchableOpacity
   onPress={() => {
    navigation.navigate('Homepage')
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
  <Text style={styles.destiny} >Destination</Text>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder = "Search your Destination"
      />
      <Search style={[styles.searchicon]} name= "search1" />

      </View>
      <TouchableOpacity
   onPress={() => {
    navigation.navigate('Mapsecond')
   }} >
      <Rightarrow  style={[styles.rightarrowdesign]}    name='arrowright' />

      </TouchableOpacity>
  </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({
    mapview : {
  justifyContent: "center",
  textAlign: "center",

    },
    map : {
        height: 460,
        marginTop: 20
    },
    arrowdesign :{
        marginTop: 40,
        marginLeft: 10,
        fontSize: 35,
    }, 
    head : {
        textAlign: "center",
        marginTop: -34,
        fontSize: 24
    },
    input : {
        backgroundColor: "lightgrey",
        marginTop: 15,
        width: 320,
        borderRadius: 4,
        height: 40,
        paddingLeft: 40,
        marginHorizontal: 20
      
       }, 
       searchicon :{
        fontSize: 26,
        marginLeft: 24,
        marginTop: -33
       },
       destiny : {
        color: "green",
        fontSize: 16,
        marginTop: 30,
        marginLeft : 20
       },
       rightarrowdesign : {
        marginTop: 20,
        marginLeft: 310,
        fontSize: 35,
       }
})
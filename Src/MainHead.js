import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Octicons } from '@expo/vector-icons'; 
import {
  JosefinSans_100Thin,
JosefinSans_200ExtraLight,
JosefinSans_300Light,
JosefinSans_400Regular,
JosefinSans_500Medium,
JosefinSans_600SemiBold,
JosefinSans_700Bold,
JosefinSans_100Thin_Italic,
JosefinSans_200ExtraLight_Italic,
JosefinSans_300Light_Italic,
JosefinSans_400Regular_Italic,
JosefinSans_500Medium_Italic,
JosefinSans_600SemiBold_Italic,
JosefinSans_700Bold_Italic,
 } from '@expo-google-fonts/josefin-sans'

 import { useFonts } from 'expo-font';
 import AppLoading from 'expo-app-loading';

const MainHead = () => {

  let [fontsload] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  if(!fontsload){
    return <AppLoading/>;
  }
  return (
    <View style={styles.container} >
      <Text style={[styles.head]} >Medmove</Text>
      <Octicons  style={[styles.dash1, styles.commonstyle ]}  name="dash" size={24} color="black" />
      <Octicons  style={[styles.dash2, styles.commonstyle ]}  name="dash" size={24} color="black" />
      <Octicons  style={[styles.dash3, styles.commonstyle ]}  name="dash" size={24} color="black" />
      <Octicons  style={[styles.dash4, styles.commonstyle ]}  name="dash" size={24} color="black" />
    </View>
  )
}

export default MainHead

const styles = StyleSheet.create({
  container : {
  marginTop: -10,
  position: "relative",
  justifyContent: "center",
  textAlign: "center"
  },
  head : {
    color: 'red',
    fontSize: 40,
   fontFamily: "JosefinSans_600SemiBold_Italic",
   marginTop: -120

  },
 dash1 : {
  fontSize: 40,
right: 182,
bottom: 32,

 },
 dash2 : {
  right: 185,
bottom: 34,
  
   },
   dash3 : {
    fontSize: 40,
    left: 182,
    bottom: 32,
    
     },
     dash4 : {
      left: 185,
      bottom: 34,
      
       },
  commonstyle: {
    color: "red",
    position: "absolute"
   }
})
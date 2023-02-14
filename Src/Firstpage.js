import { StyleSheet, Text, View , Image, Button, Pressable } from 'react-native'
import React from 'react'
import {   Octicons } from '@expo/vector-icons'; 
import {
JosefinSans_500Medium,
JosefinSans_600SemiBold,
JosefinSans_700Bold,
 } from '@expo-google-fonts/josefin-sans'
 import { useFonts } from 'expo-font';
 import AppLoading from 'expo-app-loading';

const Firstpage = ({navigation}) => {

  let [fontsload] = useFonts({
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  });

  if(!fontsload){
    return <AppLoading/>;
  }

  const onPress = () => {
    // console.log("key press")
    navigation.navigate("secondpage")

  }
  return (
    <View  style={[styles.container, styles.commonstyle]}>
      <Image
      style = {styles.ImageSty}
       source={require("../assets/Images/ambulance.jpg")} />
       <Octicons  style={[styles.dash2, styles.commonstyle ]}  name="dash" size={24} color="red" />
       <Text style={[styles.head, styles.commonstyle ]} >Book Ambulance Seamlessly</Text>
       <Text style={[styles.para, styles.commonstyle ]} >Location and book the nearest ambulance increase of an emergency with one click</Text>
       <Pressable style={[styles.button, styles.commonstyle ]} onPress={onPress}>
      <Text style={styles.text}>Get Started</Text>
    </Pressable>
    <Pressable style={[styles.btn, styles.commonstyle ]} onPress={onPress}>
      <Text style={[styles.signin, styles.commonstyle]}>Sign in</Text>
    </Pressable>
 
    </View>
  )
}

export default Firstpage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageSty : {
    height: 390,
    marginTop: 20

  },
  dash2 :{
   fontSize: 40,
  },
  head :{
 fontSize: 25,
 fontFamily: "JosefinSans_700Bold"
  },
  para : {
 marginTop: 27,
 fontSize: 19,
 padding: 4,
 fontFamily: "JosefinSans_600SemiBold",
 textAlign: "center"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'red',
    width: 270,
    marginTop: 40
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  signin: {
  marginTop: 20,
  fontSize: 25,
  color: "red",
  fontFamily: "JosefinSans_600SemiBold",
  },

  commonstyle :{
    justifyContent: "center",
    alignItems: 'center',
  }
})
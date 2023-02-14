import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import {
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_200ExtraLight
   } from '@expo-google-fonts/josefin-sans'
   import { useFonts } from 'expo-font';
   import AppLoading from 'expo-app-loading';

const Getstart = ({navigation}) => {

  let [fontsload] = useFonts({
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_200ExtraLight
  });

  if(!fontsload){
    return <AppLoading/>;
  }

  const nextpage = () => {
// console.log("hy")
navigation.navigate("fourthpage")
  }



  return (
    <View style={[styles.container, styles.commonstyle]} >
      <Text style={[styles.header, styles.commonstyle]}  >Hello! ✋</Text>
      <Text style={[styles.para, styles.commonstyle]}  >Create your account using google and facebook account</Text>
      <Image style={[styles.loginImg, styles.commonstyle]} source={require("../assets/Images/loginbutton.png")} />

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -70}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center'}}>***</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
<Text style={[styles.inputhead1 ]}  >Name</Text>
<TextInput style={[styles.input1, styles.commonstyle]}
 placeholder="Enter your name"
 />
<Text style={[styles.inputhead ]}  >Email Address</Text>
<TextInput style={[styles.input1, styles.commonstyle]} 
   placeholder="Enter your email address"
/>
<Text  style={[styles.inputhead ]}  >Phone Number</Text>
<TextInput style={[styles.input1, styles.commonstyle]}
 placeholder="Enter your phone number" />
<Text style={[styles.inputhead2 ]}  >Password</Text>
<TextInput style={[styles.input1, styles.commonstyle]} 
   placeholder="Enter your password"
/>
<Pressable onPress={nextpage} style={[styles.btn, styles.commonstyle ]}  >
      <Text style={[styles.text, styles.commonstyle]}>Sign up</Text>
    </Pressable>
    </View>
  )
}

export default Getstart

const styles = StyleSheet.create({
  container: {
  justifyContent: "center",
  },
  header :{
 textAlign: "center",
 fontSize: 30,
 fontFamily: "JosefinSans_600SemiBold",
marginTop: 65
  },
  para:{
    marginTop: 2,
    fontFamily: "JosefinSans_200ExtraLight",
    fontSize: 20,
    textAlign: "center",
  },
  loginImg : {
    aspectRatio: 1, 
    resizeMode: 'contain',
    marginTop: -70
  },
  input1 :{
    backgroundColor: "rgb(236,226,225)",
    width: 300,
    height: 45,
    alignItems: "center"
  },
  inputhead :{
    margin: 5,
    marginStart: -200
  },
  inputhead1 :{
    margin: 5,
    marginStart: -250
  },
  inputhead2 :{
    margin: 5,
    marginStart: -230
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
    marginTop: 40
  },
 text:{
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
 },
  commonstyle: {
  justifyContent: "center",
    alignItems: 'center',
  },
})
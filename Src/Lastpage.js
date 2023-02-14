import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import {
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_200ExtraLight
     } from '@expo-google-fonts/josefin-sans'
     import { useFonts } from 'expo-font';
     import AppLoading from 'expo-app-loading';

const Lastpage = ({navigation}) => {

  const homepage = () => {
    navigation.navigate("Homepage")
  }

    let [fontsload] = useFonts({
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_200ExtraLight
      });
    
      if(!fontsload){
        return <AppLoading/>;
      }
  return (
    <View style={[styles.container, styles.commonstyle]} >
    <Text style={[styles.header, styles.commonstyle]}  >Wellcome Back! ✋</Text>
    <Text style={[styles.para, styles.commonstyle]}  >Signup your account with your register email and password</Text>
    <Image style={[styles.loginImg, styles.commonstyle]} source={require("../assets/Images/loginbutton.png")} />

    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -70}}>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
<View>
  <Text style={{width: 50, textAlign: 'center'}}>***</Text>
</View>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
<Text style={[styles.inputhead ]}  >Email Address</Text>
<TextInput style={[styles.input1, styles.commonstyle]} 
 placeholder="Enter your email address"
/>
<Text style={[styles.inputhead2 ]}  >Password</Text>
<TextInput style={[styles.input1, styles.commonstyle]} 
 placeholder="Enter your password"
/>
<Pressable onPress={homepage} style={[styles.btn, styles.commonstyle ]} >
    <Text style={[styles.text, styles.commonstyle]}>Sign in</Text>
  </Pressable>
  <Text style={[styles.lastpara, styles.commonstyle ]} >Don't have an account? Sign Up</Text>
  </View>
  )
}

export default Lastpage

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
          alignItems: "center",
          marginTop: -10
        },
        inputhead :{
          margin: 15,
          marginStart: -190
        },
        inputhead2 :{
          margin: 15,
          marginStart: -220
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
       lastpara: {
        marginTop: 15,
        color: "red",
        fontSize: 15
       },
        commonstyle: {
        justifyContent: "center",
          alignItems: 'center',
        },
})
import { StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from '@rneui/themed';
import {
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_200ExtraLight
   } from '@expo-google-fonts/josefin-sans'
   import { useFonts } from 'expo-font';
   import AppLoading from 'expo-app-loading';
   import Bell from 'react-native-vector-icons/FontAwesome';
   import Search from 'react-native-vector-icons/AntDesign';
   import Mic from 'react-native-vector-icons/Feather';
   import Calender from 'react-native-vector-icons/FontAwesome5';
   import Light from 'react-native-vector-icons/Foundation';
   import Call from 'react-native-vector-icons/Feather';
   import Chat from 'react-native-vector-icons/FontAwesome';
   import FloatingButton from './FloatingButton';
   import Menu from './Menu';
   import { useNavigation } from '@react-navigation/native'


const Homepage = () => {


  const navigation = useNavigation();
  let [fontsload] = useFonts({
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_200ExtraLight
  });

  if(!fontsload){
    return <AppLoading/>;
  }

  const onChangeText = () => {

  }
  const text = () =>{

  }
  return (
 <SafeAreaView style={[styles.maincontainer]} >
  <View  style={[styles.avtar]} >
  <Avatar
    size={48}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
  />
  </View>
  <View style={[styles.detail]}  >
  <Text style={[styles.wish]} >Good Morning</Text>
  <Text style={[styles.name]} >Chidinaman ✋</Text>
  </View>
  <Bell  style={[styles.bell]} name="bell" />
  <View>
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder = "Search Medmove"
      />
      <Search style={[styles.searchicon]} name= "search1" />
      <Mic style={[styles.micicon]} name='mic' />
      </View>
      <TouchableOpacity onPress={() =>{
        navigation.navigate('Sospage')
      }} >
      <Image style={[styles.homeimage]} source={require("../assets/Images/homeimg.png")}
       />
      </TouchableOpacity>
      
      <Text style={[styles.Quick]} >Quick Links</Text>

      <View  style={[styles.Function]} >
      <TouchableOpacity onPress={() =>{
        navigation.navigate('Map')
      }} >
        <View style={[styles.firstdiv]}  >
        <View style={[styles.Backgroundicon]}>
        <Calender name="calendar-alt" style={{color: "red"}} />
        </View>
          <Text style={{fontSize: 16, padding: 8}} >Book an Ambulance</Text>
        </View>
        </TouchableOpacity>
        <View style={[styles.seconddiv]} >
        <View style={[styles.Backgroundicon]} >
        <Light name="lightbulb" style={{color: "lightblue"}} />
        </View>
        <Text style={{fontSize: 16, padding: 8}} >Firt Aid Tips</Text>
        </View>
        </View>
        <View style={[styles.Function1]} >
        <TouchableOpacity onPress={() =>{
        navigation.navigate('Assigntrip')
      }} >
        <View style={[styles.firstdiv1]} >
        <View style={[styles.Backgroundicon]} >
        <Call name="phone-call"  style={{color: "darkblue"}}  />
        </View>
        <Text style={{fontSize: 16, padding: 8}} >Emergency Dail Number</Text>
        </View>
        </TouchableOpacity>
        <View style={[styles.seconddiv1]} >
        <View style={[styles.Backgroundicon]} >
        <Chat name="wechat"  style={{color: "orange"}} />
        </View>
        <Text style={{fontSize: 16, padding: 8}} >Chat with a Docter</Text>
        </View> 
      </View>
      <FloatingButton/>
      <View style ={styles.menustyle} >
      <View  style ={styles.linestyle} ></View>
      <Menu/>
      </View>
     

 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
 justifyContent: "center",
 alignItems: "center",
  },
  avtar : {
    marginTop: 50,
    marginLeft: -250,
  },
  detail: {
    display: "flex",
    marginLeft: -56,
    marginTop: -40,
  },
  wish : {
   fontSize: 12,
   fontFamily: "JosefinSans_200ExtraLight",
  },
 name : {
 fontSize: 18,
 fontFamily: "JosefinSans_700Bold"
 },
 bell :{
fontSize: 20,
marginLeft: 240,
marginTop: -30,
color: "green"
 }, 
 input : {
  backgroundColor: "lightgrey",
  marginTop: 40,
  width: 290,
  borderRadius: 4,
  height: 40,
  paddingLeft: 40
 }, 
 searchicon :{
  fontSize: 26,
  marginLeft: 5,
  marginTop: -33
 },
  micicon : {
    fontSize: 26,
    marginLeft: 260,
    marginTop: -28
  },
   homeimage : {
    marginTop: 40,
    width: 300,
    height: 150,
    borderRadius: 10,
   }, 
   Quick : {
    fontSize: 20,
    marginTop: 25,
    marginLeft: -190,
    fontFamily: 'JosefinSans_500Medium'
   },
   Function:{
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around"
   },
   firstdiv :{
    backgroundColor: '#fce5e0',
    width: 140,
    height: 100,
    borderRadius: 15,
    marginRight: 10
    
   }, 
   seconddiv :{
   backgroundColor: "#ebe6f0",
   width: 140,
    height: 100,
    borderRadius: 15,
    marginLeft: 10
   },
   Function1 : {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around"
   },
   firstdiv1 :{
    backgroundColor: '#fce5e0',
    width: 140,
    height: 100,
    borderRadius: 15,
    marginRight: 10
    
   }, 
   seconddiv1 :{
    backgroundColor: "#fce6e9",
    width: 140,
     height: 100,
     borderRadius: 15,
     marginLeft: 10
    },
    Backgroundicon :{
      margin: 10,
      backgroundColor: "white",
      width: 25,
      height: 25,
      padding: 6,
      borderRadius: 15
    },
     linestyle : {
   width:  300
    }, 
    menustyle :{
      textTransform : "uppercase",
      marginTop :  24
      
    },
    linestyle: {
      borderColor : "black",
      borderWidth: 0.7,
      marginBottom: 10
    }

  
})
export default Homepage
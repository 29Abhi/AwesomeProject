import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Leftarrow from 'react-native-vector-icons/AntDesign';
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'


const Sospage = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Sos} >
    <TouchableOpacity
   onPress={() =>{
        navigation.navigate('Homepage')
      }} >
      <Leftarrow  style={[styles.arrowdesign]}    name='arrowleft' />
      </TouchableOpacity>
      <View style = {styles.image} >
      <Avatar
    size={48}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
  </View>
  <Text style={styles.heading} >Are you in emergency ?</Text>
  <Text  style={styles.para} >Press the button bellow and help will get to you SOS</Text>

  <Image style={styles.sosbutton} source={require("../assets/Images/sosimage.png")} />
  <View style= {styles.locationdiv} >
  <View style= {styles.locationavtar} >
  <Avatar
    size={30}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
  </View>
   <Text  style= {styles.locationhead1} >Your Current Location</Text>
   <Text style= {styles.locationhead2} >Md 947 Dipka colony gevera project korba </Text>
  </View>
  <Text  style= {styles.changelocation}>Change Location</Text>
    </SafeAreaView>
  )
}

export default Sospage

const styles = StyleSheet.create({
    Sos: {
          alignItems: 'center',
        justifyContent: 'center',
    },
    arrowdesign : {
       marginTop: 40,
       marginLeft: -150,
       fontSize: 36,
    },
     image :{
     marginLeft: 300,
    marginTop: -40
     }, 
     heading :{
        fontSize: 27,
        marginTop: 30
     }, 
     para : {
        fontSize: 17,
        textAlign: "center",
        marginTop: 20,
        paddingHorizontal: 10
     }, 
     sosbutton : {
        marginTop: 100,
        width: 200,
    height: 200,
     },
     locationdiv : {
        marginTop: 40,
        
        display: "flex"
     },
     locationavtar : {
     marginLeft: -10,
     marginTop: 20
     },
     locationhead1 : {
        marginLeft: 30,
        marginTop: -40,
        fontSize: 20,
        color : 'red'
     },
     locationhead2 :{
        marginLeft: 30,
        fontSize: 15
     },
     changelocation:{
        fontSize: 25,
        marginTop: 30,
        color: "green"
     }
})
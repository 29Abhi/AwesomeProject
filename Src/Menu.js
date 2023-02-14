import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Home from 'react-native-vector-icons/Entypo';
import Chat from 'react-native-vector-icons/FontAwesome';
import Wallet from 'react-native-vector-icons/FontAwesome5';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';


const Menu = () => {
    const navigation = useNavigation();
  return (
    
    <View  style={styles.menustyle} >
      <TouchableOpacity  style={styles.buttonstyle}
      onPress={() =>{
        navigation.navigate('Homepage')
      }} >
      <Home name="home" style={styles.menuicon} />
        <Text>Home</Text>
      </TouchableOpacity>
   
      <TouchableOpacity  style={styles.buttonstyle} onPress={() =>{
        navigation.navigate('Chat')
      }}
      >
      <Chat name="wechat"  style={styles.menuicon} />
        <Text>Chat</Text>
      </TouchableOpacity>
    
      <TouchableOpacity  style={styles.buttonstyle} onPress={() =>{
        navigation.navigate('Wallet')
      }} >
      <Wallet name='wallet'  style={styles.menuicon} />
        <Text>Wallet</Text>
      </TouchableOpacity>
   
      <TouchableOpacity style={styles.buttonstyle} onPress={() =>{
        navigation.navigate('Account')
      }} >
      <Account name="account"  style={styles.menuicon} />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menustyle : {
        flexDirection : "row",
        justifyContent: "space-evenly",
        width: 400,
        textTransform : "uppercase"

    },
    menuicon :{
        fontSize: 27,
        color: "grey",
        justifyContent: "center",
        alignItems : "center",
        marginLeft: 5
    }
})
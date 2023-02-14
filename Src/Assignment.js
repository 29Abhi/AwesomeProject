import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fontisto,  Octicons } from '@expo/vector-icons'; 
import MainHead from './MainHead';


const Assignment = ({navigation}) => {
  useEffect(() => {
    setTimeout(() =>{
     navigation.navigate("thirdpage")
    },3000)
  },[])
  return (
    <View style={styles.container} >
      <Fontisto style={styles.ambu}  name="ambulance" size={54} color="red" />
      <Octicons  style={[styles.dash1, styles.commonstyle ]}  name="dash" size={24} color="black" />
      <Octicons  style={[styles.dash2, styles.commonstyle ]}  name="dash" size={24} color="black" />
     <MainHead/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: "relative"
    },
    ambu: {
     marginBottom: 80
    },
    
    dash1 : {
    left: 105,
    color: "red",
    fontSize: 40,
    bottom:387,
    },
    dash2 : {
      left : 115,
      color: "red",
      fontWeight: 120,
      bottom: 390
    },
    commonstyle :{
      position: "absolute"
    }
  });
  

export default Assignment
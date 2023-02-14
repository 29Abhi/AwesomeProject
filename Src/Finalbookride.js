import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { Avatar } from '@rneui/themed';

const Finalbookride = () => {
  return (
     <SafeAreaView >
       <MapView
        style={styles.map}
    initialRegion={{
      latitude: 22.363848,
      longitude: 82.734840,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
     <Text  style={styles.fisthead}>Driving to your Destination</Text>
        <Text style={styles.secondhead} >Stay calm 10 mins from your location</Text>
        <View style={styles.midsec} >
            <Image style={styles.ambuimage} source={require("../assets/Images/ambu.webp")} />
            <Avatar
    size={70}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
    style={styles.avtarimage}
  />
  <Text style={styles.ambuname} >Ambulance Type 1</Text>
  <Text style={styles.drivername} >Anthony</Text>
  <Text style={styles.driverposition}  >Driver</Text>
        </View>

        <Text style={styles.trip} >Trip Detail</Text>
<View style={styles.from} >
    <Text  style={styles.flocal}>From ambulance location </Text>
</View>
<View style={styles.to} >
    <Text style={styles.flocal} >Your Location location </Text>
</View>
   </SafeAreaView>
  )
}

export default Finalbookride

const styles = StyleSheet.create({
    map : {
        height: 360,
        marginTop: 20
    },
    fisthead : {
        fontSize: 22,
        marginTop: 22,
        textAlign: "center"
    },
    secondhead : {
        fontSize: 14,
        color: "grey",
        textAlign: "center"
    },
    avtarimage :{
        width: 70,
        height: 70,
        marginTop : -75,
        marginLeft: 150
    },
    ambuname : {
        marginTop: 10,
        marginLeft: -20,
        color: "grey"
       },
       drivername : {
        marginTop: -20,
        marginLeft: 160,
        color: "grey"
       },
       ambuimage : {
        width: 150,
        height: 80,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: -40
    },
    midsec : {
        width: "90%",
        marginLeft: 75,
        marginTop: -10
    },
    driverposition : {
        marginLeft: 165,
        color: "grey"
    },
    trip : {
        marginTop : 30,
        fontSize: 20,
        marginLeft: 30,
        alignItems: 'center'
    }, 
    from : {
        width: "70%",
        height: 40,
        backgroundColor: "rgb(252,252,242)",
        marginTop  : 20,
        alignItems: 'center',
        marginLeft: 55
    },
    to : {
        width: "70%",
        height: 40,
        backgroundColor: "rgb(252,252,242)",
        marginVertical: 20,
        marginLeft: 55,
        alignItems: 'center',
    },
    flocal : {
      marginTop: 10,
      marginLeft: 20,
    
    },
})
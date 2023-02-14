import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from '@rneui/themed';
import Edit from 'react-native-vector-icons/AntDesign';
import First from 'react-native-vector-icons/FontAwesome';
import Call from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/AntDesign';

const Detailambu = ({navigation}) => {

    const firstpress = () => {
        navigation.navigate('Finalbookride')
    }
  return (
    <SafeAreaView style={styles.safearea} >
        <Text  style={styles.fisthead}>Ambulance arraving in 2 min</Text>
        <Text style={styles.secondhead} >Please get ready your ambulance is arriving soon</Text>
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
        <View style={styles.icon} >
        <View style={styles.editborder} >
       <Edit style={styles.iconstyle1} name='edit' />
       <Text  style={styles.icondetail} >Edit Vehical</Text>
        </View>
        <View  style={styles.firstborder} >
            <First style={styles.iconstyle2} name='first-order' />
            <Text style={styles.icondetail} >Safety Path</Text>
        </View>
        <View style={styles.callborder} >
            <Call style={styles.iconstyle3} name='call' />
            <Text style={styles.icondetail} >Contact Driver</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center' , width: "90%" , marginTop: 50}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
<Text style={styles.trip} >Trip Detail</Text>
<View style={styles.from} >
    <Text  style={styles.flocal}>From ambulance location </Text>
</View>
<View style={styles.to} >
    <Text style={styles.flocal} >Your Location location </Text>
</View>
 <View style={{flexDirection: 'row', alignItems: 'center' , width: "90%" ,}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
<Text style={styles.payment} >Payment</Text>
<Text style={styles.code} >#50000</Text>
<View style={styles.to} >
   <Arrow style={styles.arrow} name='caretright' />
   <Image style={styles.master} source={require("../assets/Images/mastercard.jpg")} />
   <Text style={styles.masterno} >**** 1234</Text>
</View>
<View style={styles.cancle} >
 <Pressable onPress={() => firstpress("press")}
  style={({pressed}) =>[
    {
    backgroundColor : pressed ? "#e0ecfa" : "white",
    height: 80
    }
  ]} >
  <Text style={styles.cancleone} >Cancle Ride</Text>
  </Pressable>
  </View>
</SafeAreaView>
  )
}

export default Detailambu

const styles = StyleSheet.create({
    safearea : {
        justifyContent: "center",
        alignItems: 'center',
    },
   
    ambuimage : {
        width: 150,
        height: 80,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: -40
    },
    fisthead : {
        fontSize: 22,
        marginTop: 22
    },
    secondhead : {
        fontSize: 14,
        color: "grey"
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
       driverposition : {
        
        marginLeft: 165,
        color: "grey"
       }, 
       editborder :{
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 50,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderStartWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: "red",
        borderRightColor: "red",
        borderTopColor: 'red'
        },
        icon : {
            display: 'flex',
            flexDirection: 'row',
           justifyContent: "space-between",
            width: "70%",
            marginTop : 10
        },
        firstborder : {
            width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 50,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderStartWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: "lightblue",
        borderRightColor: "lightblue",
        borderTopColor: "lightblue"
        }, 
        callborder : {
            width: 60,
            height: 60,
            backgroundColor: "#fff",
            borderRadius: 50,
            borderBottomWidth: 2,
            borderRightWidth: 2,
            borderStartWidth: 2,
            borderTopWidth: 2,
            borderBottomColor: "green",
            borderRightColor: "green",
            borderTopColor: "green"
        },
        iconstyle1 : {
            fontSize: 35,
            marginHorizontal: 10,
            marginVertical: 10,
            color: "red"
        },
        iconstyle2 : {
            fontSize: 35,
            marginHorizontal: 12,
            marginVertical: 10,
            color: "lightblue"
        },
        iconstyle3 : {
            fontSize: 35,
            marginHorizontal: 10,
            marginVertical: 10,
            color: "green"
        },
        icondetail : {
             marginTop : 10,
             marginHorizontal: -20,
        },
        trip : {
            marginTop : 30,
            fontSize: 20
        }, 
        from : {
            width: "70%",
            height: 40,
            backgroundColor: "rgb(252,252,242)",
            marginTop  : 20
        },
        to : {
            width: "70%",
            height: 40,
            backgroundColor: "rgb(252,252,242)",
            marginVertical: 20
        },
        flocal : {
          marginTop: 10,
          marginLeft: 20
        },
        arrow : {
            fontSize: 30,
            color: "grey",
            marginLeft: 210,
            marginTop: 5
        }, 
        master : {
            width: 25,
            height: 25,
            marginTop: -30,
            marginLeft: 10
    
        },
        masterno : {
            marginTop: -22,
            marginLeft: 40,
            fontSize: 16
        },
        cancle : {
            width: "90%",
            height: 40,
            borderRadius: 5,
            borderBottomWidth: 2,
            borderRightWidth: 2,
            borderStartWidth: 2,
            borderTopWidth: 2,
            borderBottomColor: "lightblue",
            borderRightColor: "lightblue",
            borderTopColor: "lightblue",
            borderLeftColor: 'lightblue',
            
            
        },
        cancleone : {
            width: "90%",
            height: 40,
            textAlign: "center",
            fontSize: 25,
            color: 'lightblue'
        },
        payment: {
            fontSize: 16,
            marginLeft: -200,
            marginTop: 8
        }, 
        code : {
            fontSize: 16,
            marginLeft: -210,
        
        }


})
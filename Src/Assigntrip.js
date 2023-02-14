import { FlatList, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Leftarrow from 'react-native-vector-icons/Ionicons';
import Downarrow from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/Entypo';
import Date from 'react-native-vector-icons/AntDesign';
import Uparrow from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
const Types = [
    {Type: 'Type1'},
    {Type: 'Type2'},
    {Type: 'Type3'},
    {Type: 'Type4'},
    {Type: 'Type5'},
    {Type: 'Type6'},
  ];

const Assigntrip = ({navigation}) => {
  const [type , setType] = useState("")
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState(Types) 
    
  return (
    <SafeAreaView style={styles.safearea}  > 
    <TouchableOpacity onPress={() =>{
        navigation.navigate('Homepage')
      }}>
  <Leftarrow  style={styles.Leftarrow}   name='arrow-back-outline'/>
  </TouchableOpacity>
  <Text style={styles.head} >Sheduled Trip</Text>
  <Text style={styles.head1} >Emergency type</Text>
<TouchableOpacity style={styles.selectdropdown} onPress ={() => {
   setClicked(!clicked)
}}>
  <Text>{type}</Text>
{
  clicked ? (
    <Uparrow  style={styles.icondown} name='up' />
  ) : (
    <Downarrow  style={styles.icondown} name='down' />
  )
}

</TouchableOpacity>
{
  clicked ? (
    <View style={styles.dropdownarea} >
 <FlatList data = {data} renderItem={({item, index}) => {
  return (
    <TouchableOpacity style={styles.flatlistview} onPress = {() => {
      setType(item.Type)
      setClicked(false)

    }} >  
    <Text>{item.Type}</Text>
    </TouchableOpacity>
  )
 }} />
</View>
  ) : ( null )
}
<Text style={styles.head1} >Pickup Location</Text>
<TouchableOpacity style={styles.selectdropdown} onPress ={() => {
}}>
  <Text>Select your location</Text>
  <Location style={styles.icondown} name='location-pin' />
</TouchableOpacity>

<Text style={styles.head12} >Destination</Text>
<TouchableOpacity style={styles.selectdropdown} onPress ={() => {
}}>
  <Text>Enter your location</Text>
  <Location style={styles.icondown} name='location-pin' />
</TouchableOpacity>
<Text style={styles.head12} >Valid From </Text>
<TouchableOpacity style={styles.selectdropdown} onPress ={() => {
}}>
  <Text>Select Date</Text>
  <Date style={styles.icon} name='calendar' />
  <Text>Select Time</Text>
  <Time style={styles.icontime} name='back-in-time' />
</TouchableOpacity>
<View style={styles.tick} ></View>
<Text style={styles.all}>All Day</Text>
<Text style={styles.head12} >Valid Till </Text>
<TouchableOpacity style={styles.selectdropdown} onPress ={() => {
}}>
  <Text>Select Date</Text>
  <Date style={styles.icon} name='calendar' />
  <Text>Select Time</Text>
  <Time style={styles.icontime} name='back-in-time' />
</TouchableOpacity>
<TouchableOpacity onPress={() => {
    navigation.navigate('Ambulancelist')
}}  style={styles.continue} >
  <Text style={styles.cont} >Continue</Text>
</TouchableOpacity>

    </SafeAreaView>
  )
}

export default Assigntrip

const styles = StyleSheet.create({
    Leftarrow : {
        fontSize: 40,
        marginLeft: -170,
        marginTop: 70
    },
    continue : {
   width: "85%",
   height: 50,
   alignSelf: "center",
   marginTop:  30,
   backgroundColor: "hsl(349,86%,72%)",
   borderRadius: 10
    },
    cont : {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
    marginTop: 10
    },
    icontime : {
      fontSize: 25,
      width: 30
    },
    safearea  : {
        justifyContent: "center",
        alignItems: "center"
    },
    head : {
        fontSize: 30,
        marginTop: -42,
      
    }, 
    head1 : {
        marginLeft: -200,
        marginTop: 20,
    }, 
    head12 : {
      marginLeft: -230,
      marginTop: 20,
    },
  selectdropdown: {
    width: "90%",
    height: 50,
    borderRadius: 10,
  
    alignSelf: "center",
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "lightgrey",
},
icon : {
  fontSize: 25,
  width: 80
},
icondown : {
  fontSize: 25,
  width: 30
},
dropdownarea : {
  elevation: 5,
  marginTop: 20,
  height: 200,
  alignSelf: 'center',
  width: '90%',
  backgroundColor: '#fff',
  borderRadius: 10,
 },
 flatlistview : {
  width: '85%',
   alignSelf: 'center',
   height: 50,
   justifyContent: 'center',
   borderBottomWidth: 0.5,
   borderColor: '#8e8e8e',
 },
 tick : {
  width: 20,
  height: 20,
  borderWidth: 2,
  borderRadius: 3,
  marginTop: 20,
  marginLeft: -300
 },
 all : {
  fontSize: 20,
  marginLeft: -200,
  marginTop: -24
 }

})
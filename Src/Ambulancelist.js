import { StyleSheet, Text, View, TouchableOpacity, Image,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Leftarrow from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import {
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
     } from '@expo-google-fonts/josefin-sans'
     import AppLoading from 'expo-app-loading';



const Ambulancelist = ({navigation}) => {

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
        // navigation.navigate("secondpage")
    
      }
    const Ambulancepic = [
        {
        image: require( "../assets/Images/ambu1.jpg"),
        type : "Type1",
        seat : "2",
        charge : "1000",
        key : "1",
        },
        {
            image: require( "../assets/Images/ambu11.jpg"),
            type : "Type1",
            seat : "2",
            charge : "1203",
            key : "2",
            },
            {
                image: require( "../assets/Images/ambu4.webp"),
                type : "Type1",
                seat : "2",
                charge : "1267",
                key : "3",
                },
                {
                    image: require( "../assets/Images/ambu2.webp"),
                    type : "Type1",
                    seat : "2",
                    charge : "1683",
                    key : "4",
                    },
                    {
                        image: require( "../assets/Images/ambu5.jpg"),
                        type : "Type1",
                        seat : "2",
                        charge : "269",
                        key : "5",
                        },
                        {
                            image: require( "../assets/Images/ambu6.jpg"),
                            type : "Type1",
                            seat : "2",
                            charge : "2552",
                            key : "6",
                            },
                            {
                                image: require( "../assets/Images/ambu7.png"),
                                type : "Type1",
                                seat : "2",
                                charge : "2468",
                                key : "7",
                                },
                                {
                                    image: require( "../assets/Images/ambu8.jpg"),
                                    type : "Type1",
                                    seat : "2",
                                    charge : "1246",
                                    key : "8",
    
                                    },
                                    {
                                        image: require( "../assets/Images/ambu9.jpg"),
                                        type : "Type1",
                                        seat : "2",
                                        charge : "1234",
                                        key : "9",
                                        },
                                        {
                                            image: require( "../assets/Images/ambu10.jpg"),
                                            type : "Type1",
                                            seat : "2",
                                            charge : "4322",
                                            key : "10",
                                            },
                                            {
                                                image: require( "../assets/Images/ambu11.jpg"),
                                                type : "Type1",
                                                seat : "2",
                                                charge : "1234",
                                                key : "11",
                                                },
                                                {
                                                    image: require( "../assets/Images/ambu12.jpg"),
                                                    type : "Type1",
                                                    seat : "2",
                                                    charge : "2468",
                                                    key : "12",
                                                    }
    
    ];
  return (
   <SafeAreaView  style={styles.safearea }  >
     <TouchableOpacity  >
  <Leftarrow  style={styles.Leftarrow}   name='arrow-back-outline'/>
  </TouchableOpacity>
  <Text style={styles.head} >Select Ambulance</Text>
  <Text style={styles.head1} >Select an Ambulance lociated around you </Text>
  <FlatList keyExtractor={item => item.key}
  numColumns={2}
  
   data={Ambulancepic} renderItem={({item}) => {

    return ( 
    <View style={styles.boxmodel} >
    <Image  style={styles.textstyle} source={item.image} />
    <Text  style={styles.text} >  {item.type}</Text>
    <Text style={styles.text}  > Seat No. - {item.seat}</Text>
    <Text style={styles.text}  > Price #{item.charge}</Text>
    </View>
    )
  }} />
   <TouchableOpacity style={[styles.btn, styles.commonstyle ]} onPress={() => {
    navigation.navigate('TripSummry')
   }}>
      <Text style={[styles.signin, styles.commonstyle]}>Continue</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}

export default Ambulancelist

const styles = StyleSheet.create({
    Leftarrow : {
        fontSize: 30,
        marginLeft: -170,
        marginTop: 40
    },
    safearea  : {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    head : {
        fontSize: 25,
        marginTop: -52
    }, 
    head1 : {
        
    },
    flatlistimage : {
        width: 150,
        height: 150
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      textstyle : {
        width: 150,
        height: 80,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      boxmodel : {
        width: 150,
        height: 140,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "hsl(70,8%,86%)",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        borderRadius: 20
      },
      text : {
        fontSize: 16,

      },
      signin: {
        paddingTop: 10,
        fontSize: 28,
        color: "white",
        fontFamily: "JosefinSans_600SemiBold",
        paddingBottom: 15
        
        },
        btn : {
            alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'red',
    width: "90%",
        }
})
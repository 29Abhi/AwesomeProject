import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';


const FloatingButton = () => {

    const [icon_1] = useState(new Animated.Value(-20))
    const [icon_2] = useState(new Animated.Value(-20))
    const [icon_3] = useState(new Animated.Value(-20))

    const [pop, setPop] = useState(false);

    const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_3, {
            toValue: 160,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
    

    const popOut = () =>{
        setPop(false);
        Animated.timing(icon_1,{
            toValue: -20,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2,{
            toValue: -20,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_3,{
            toValue: -20,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
  return (
    <View style={{
        flex: 1
    }} >
    <Animated.View style={[styles.icon, {bottom: icon_1}]} >
        <TouchableOpacity>
            <Bell  name="clock" size={30} color="white"  />
        </TouchableOpacity>
    </Animated.View>
    <Animated.View style={[styles.icon, {bottom: icon_2}]} >
        <TouchableOpacity>
            <Bell  name="access-point-network" size={30} color="white"  />
        </TouchableOpacity>
    </Animated.View>
    <Animated.View style={[styles.icon, {bottom: icon_3}]} >
        <TouchableOpacity>
            <Bell  name="calendar-month"  size={30} color="white" />
        </TouchableOpacity>
    </Animated.View>
      <TouchableOpacity  style={styles.icon}
      onPress={() => {
        pop === false ? popIn() : popOut()
      }}>
      <Bell name="alarm-light" size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    icon : {
    backgroundColor: "red",
    width: 50,
    height: 50,
    position: "absolute",
    left: 100,
    bottom: -22,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
    },
})
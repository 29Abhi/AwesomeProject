import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View>
      <Text  style={styles.inputhead2} >Chat</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  inputhead2 : {
    fontSize: 70
  }
})
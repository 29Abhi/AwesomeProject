import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wallet = () => {
  return (
    <View>
      <Text style={styles.inputhead2} >Wallet</Text>
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
  inputhead2 : {
    fontSize: 70
  }
})
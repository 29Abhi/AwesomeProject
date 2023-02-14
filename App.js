import { StatusBar } from 'expo-status-bar';
import {  Text, View, StyleSheet } from 'react-native';
import Assignment from './Src/Assignment';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstart from './Src/Getstart';
import Firstpage from './Src/Firstpage';
import Lastpage from './Src/Lastpage';
import Homepage from './Src/Homepage';
import Chat from './Src/Chat';
import Wallet from './Src/Wallet';
import Account from './Src/Account';
import Sospage from './Src/Sospage';
import Map from './Src/Map';
import Mapsecond from './Src/Mapsecond';
import Detailambu from './Src/Detailambu';
import Finalbookride from './Src/Finalbookride';
import Assigntrip from './Src/Assigntrip';
import Ambulancelist from './Src/Ambulancelist';
import TripSummry from './Src/TripSummry';
import Paymentpage from './Src/Paymentpage';


export default function App() {

  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName='firstpage'> 
    <Stack.Screen  name="firstpage" component={Assignment} />
    <Stack.Screen name="secondpage" component={Getstart} />
    <Stack.Screen name="thirdpage" component={Firstpage} />
    <Stack.Screen name="fourthpage" component={Lastpage} />
    <Stack.Screen name="Homepage" component={Homepage} />
   <Stack.Screen  name='Chat' component={Chat} />
   <Stack.Screen  name='Wallet' component={Wallet} />
   <Stack.Screen  name='Account' component={Account} />
   <Stack.Screen name='Sospage' component={Sospage} />
   <Stack.Screen name='Map' component={Map} />
   <Stack.Screen name='Mapsecond' component={Mapsecond} />
   <Stack.Screen name='Detailambu' component={Detailambu} />
   <Stack.Screen name='Finalbookride' component={Finalbookride} />
   <Stack.Screen name='Assigntrip' component={Assigntrip} />
   <Stack.Screen name='Ambulancelist' component={Ambulancelist} />
   <Stack.Screen name='TripSummry' component={TripSummry} />
   <Stack.Screen name='Paymentpage' component={Paymentpage} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative"
  },
})


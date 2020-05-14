import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


import Cover from './screens/covers';
import Verification from './screens/verification';
import Information from './screens/generalInformation';
import Home from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Cover'
        component= {Cover}
        options={{headerShown: false}}/>

        <Stack.Screen 
        name='Verification'
        component= {Verification}
        options={{headerShown: false}}/>

        <Stack.Screen 
        name='General Information'
        component= {Information}
        />

        <Stack.Screen 
        name='Home'
        component= {Home}
        options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

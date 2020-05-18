import React from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/header/header'

export default function VitalsScreen({navigation}){
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Vitals</Text>
            </View>
            <Text>General Information</Text>
            <TouchableOpacity style={{alignItems:'center', justifyContent:"center"}} onPress={()=>{
                navigation.navigate('Settings')}}>
                    <View style={styles.submitCode} >
                        <Text style={{color: "#fff"}} >Go to Settings</Text>
                    </View>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:20,
      paddingVertical:20,
    },
    headerText:{
        fontWeight:'bold', 
        fontSize:30
    },
    headerView:{
         
        paddingHorizontal:10,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"#949494"
    },
    submitCode:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 45, 
        width: 225,
        backgroundColor: "#000000", 
        marginVertical: 20,
        borderRadius:10,
        
    },
  });
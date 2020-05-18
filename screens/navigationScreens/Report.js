import React from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ReportScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={{paddingVertical:20, paddingHorizontal:20}}>
                <Text style={{fontWeight:'bold', fontSize:25}}>Report</Text>
            </View>
            <Text>General Information</Text>
            <TouchableOpacity style={{alignItems:'center', justifyContent:"center"}} onPress={()=>{
                navigation.navigate('Vitals')}}>
                    <View style={styles.submitCode} >
                        <Text style={{color: "#fff"}} >Go to Vitals</Text>
                    </View>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:15,
      paddingVertical:35,
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
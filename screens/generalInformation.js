import React from 'react';
import { View, Text,  StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function generalInformation({navigation}){
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text>General Information</Text>
            </ScrollView>
            <TouchableOpacity style={{alignItems:'center', justifyContent:"center"}} onPress={()=>{
                navigation.navigate('Home')}}>
                    <View style={styles.submitCode} >
                        <Text style={{color: "#fff"}} >Let's Get started..</Text>
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
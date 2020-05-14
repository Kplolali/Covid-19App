import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function covers({navigation}) {
    return(
        <ImageBackground 
        source={require('../assets/bg.jpg')} 
        resizeMode="cover" 
        style={{flex: 1,width:undefined, height:undefined}}>
            <View style={styles.container}>
                <Text style={styles.cover}>
                    COVERS
                </Text>
                <Text style={styles.text}>{"(COVID-19 EMERGENCY RESPONSE SOLUTION)\n Join the effort by well-meaning Affricans using technology to slow \n down and eventually halt the spread of COVID-19"}</Text>
                
                <View style={{margin:35}}>

                    <View style={styles.textInputView}>
                        <View>
                            <TextInput
                            style={styles.inputText}
                            keyboardType="number-pad"
                            />
                        </View>
                        <View style={styles.phoneView}>
                            <Text>Phone Number</Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                    <View style={styles.getStartedButton} onPress={()=>{
                        navigation.navigate('Verification')
                    }}>
                        <Text style={{color: "#fff"}} >Get Started</Text>
                    </View>
                  </TouchableOpacity>

                </View>
            </View>
            
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
    },
    text:{
        color:"white", 
        textAlign:'center'
    },
    cover:{
        color:"white",
        fontSize:60,
        fontWeight:"bold"
    },
    getStartedButton:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 45, 
        width: 345,
        backgroundColor: "#22b266", 
        marginVertical: 20,
        borderRadius:10
    },
    phoneView:{
        display: "flex",
         alignItems: "center", 
         justifyContent: "center", 
         padding: 10
    },
    inputText:{
        backgroundColor: "#fff", 
        height: 50, 
        width: 220, 
        padding: 10
    },
    textInputView:{
        display: "flex", 
        flexDirection: "row", 
        height: 50, 
        backgroundColor: "#fff"
    }
    
  });
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function header(){
    return(
        <View style={{paddingVertical:15, paddingHorizontal:15}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity>
                    <Ionicons name="ios-contact" size={50} color="#949494"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-notifications-outline" size={45} color="#363636"/>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}
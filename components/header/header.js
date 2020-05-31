import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import ProfileModal from './profileModal';

export default function header(){

    const [openModal, setopenModal] = useState(false);

    function handleOpenModal(){
        setopenModal(true)
    }

    function handleCloseModal(){
        setopenModal(false)
    }
    return(
        <View style={{paddingVertical:15, paddingHorizontal:15}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={handleOpenModal}>
                    <Ionicons name="ios-contact" size={50} color="#949494"/>
                    <ProfileModal openModal={openModal} closeModal={handleCloseModal} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-notifications-outline" size={45} color="#363636"/>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}  
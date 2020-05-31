import React from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Slider, News } from '../../data/data';

import Header from '../../components/header/header'
import { ScrollView, FlatList } from 'react-native-gesture-handler';

const SliderComponent = () => {
    return(
        <ScrollView  style={styles.sliderContainer}horizontal={true} >
            {Slider.map(item => (
                <View style={{paddingHorizontal:10}} key={item.id} >
                <Image style={styles.image} source={item.image}/>
                    <Text style={styles.number}>{item.number}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            ))}
   
        </ScrollView>
    )
}

const NewsComponent = (props) => {
    return(
       <View> 
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth}}>
            <View style={{paddingHorizontal:10, paddingVertical:20}}>
            {/* Title and Date */}
            <Text style={styles.mainText}>{props.title}</Text>
            <Text style={styles.mainText}>{props.date}</Text>

          </View>
        </View>
        {/* Body */}
        <View style={{paddingTop:20}}>
            <Text>{props.body}</Text>
        </View>
      </View>  
    )
}
export default function HomeScreen({navigation}){


    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Home</Text>
            </View>
           <ScrollView showsVerticalScrollIndicator={false}>
           
           {/* Slider component     */}
             <SliderComponent />
        
        
            {/* News item */}
            <View style={{padding:20}}>
                <Text style={styles.mainText}>Ghana's Situation Updates</Text>
                <Text style={styles.date}>Last Updated: 4/16/2020</Text>
                <FlatList 
                    scrollEnabled={false}
                    data={News}
                    renderItem={({item}) => (<NewsComponent {...item} />)}
             />
            </View>
           
          </ScrollView> 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
     flex:1,
      backgroundColor: '#fff',
      paddingHorizontal:10,
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
    sliderContainer:{
        paddingVertical:20,
     
    },
    image:{
        width:240,
        height:150,
        borderRadius:10,
    },
    number:{
        position:'absolute',
        right:30,
        top:10,
        color:'#fff',
        letterSpacing:-0.3,
        fontSize:30,
        fontWeight:"bold"
    },
    name:{
        position:'absolute',
        right:30,
        top:55,
        color:'#fff',
        letterSpacing:-0.1, 
        fontWeight:"bold"
    },
    mainText:{
        fontWeight:'bold',
        fontSize:16,
        letterSpacing:-0.4
    },
    date:{
        fontSize:11,
        color:'grey',
        fontWeight:'600'
    }
 
  });
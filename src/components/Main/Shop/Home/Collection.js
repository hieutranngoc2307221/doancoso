import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
 import little from "../../../../media/temp/little.jpg";
 import maxi from "../../../../media/temp/maxi.jpg";
 import midi from "../../../../media/temp/midi.jpg";
import bannerImage from '../../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');

export default class Collection extends Component {
gotoListProduct(category) {
    const { navigator } = this.props;
    navigator.push({ name: 'LIST_PRODUCT', category });
}
render() {
    const { types } = this.props;
    const { wrapper, textStyle, imageStyle, cateTitle } = styles;
   
    return (
        <View style={wrapper}>
          
            <View style={{ justifyContent: 'flex-end', flex: 4 }}>
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
           
           <Image source={little} style={imageStyle}/>
           <Image source={maxi} style={imageStyle}/>
           <Image source={midi} style={imageStyle}/>
  
   </Swiper>
            </View>
        </View>
    );
}
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    }
});

import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContactUs extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={design.textHeader}>Contact Us</Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/img/AYOvest.png')}
            style={{
              width: width / 1.3,
              height: width / 7,
              alignSelf: 'center',
              marginVertical: 20,
            }}
          />

          <Text style={{fontSize: 25, margin: 10, fontFamily: 'poppins'}}>
            {' '}
            AYOvest Pte. Ltd.{' '}
          </Text>
          <Text
            style={{fontSize: 15, marginHorizontal: 10, fontFamily: 'poppins'}}>
            60, #01-01 Ubi Cres, Ubi Techpark, Singapore 408569
          </Text>
          <Text
            style={{fontSize: 15, marginHorizontal: 10, fontFamily: 'poppins'}}>
            Jl. Hang Lekiu No.KM 2, Sambau, Kecamatan Nongsa, Kota Batam,
            Kepulauan Riau 29465{' '}
          </Text>
          <Text
            style={{fontSize: 15, marginHorizontal: 10, fontFamily: 'poppins'}}>
            (+65) 1234 5678, (0778) 1234567
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            top: 5,
            padding: 5,
          }}>
          <Icon name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class ContactUs extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../../assets/img/ayovest-logo.png')}
          style={{width: 320, height: 230, alignSelf: 'center'}}
        />
        <Text style={{fontSize: 25, margin: 10}}> AYOvest Pte. Ltd. </Text>
        <Text style={{fontSize: 15, marginHorizontal: 10}}>
          60, #01-01 Ubi Cres, Ubi Techpark, Singapura 408569
        </Text>
        <Text style={{fontSize: 15, marginHorizontal: 10}}>
          Jl. Hang Lekiu No.KM 2, Sambau, Kecamatan Nongsa, Kota Batam,
          Kepulauan Riau 29465{' '}
        </Text>
        <Text style={{fontSize: 15, marginHorizontal: 10}}>
          (+65) 1234 5678, (0778) 1234567
        </Text>
      </View>
    );
  }
}

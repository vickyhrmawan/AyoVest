import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class AboutUs extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../../assets/img/ayovest-logo.png')}
          style={{
            width: 320,
            height: 230,
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />
        <Text style={{fontSize: 20, marginHorizontal: 10}}>
          We are a company that helps you to invest in Livestock Industry. We
          believe that investing in this industry is very encouraging for both
          of you and the breeder. The more you invest you also participating in
          GoGreen because of the flow that require breeder and farmer around to
          be participated and making the world greener.{' '}
        </Text>
      </View>
    );
  }
}

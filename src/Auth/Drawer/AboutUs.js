import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class AboutUs extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={design.textHeader}>About Us</Text>
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
          <Image
            source={require('../../../assets/img/AYOvest.png')}
            style={{
              width: width / 1.3,
              height: width / 7,
              alignSelf: 'center',
              marginVertical: 20,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 20,
              marginVertical: width / 12,
            }}>
            What is AYOvest?
          </Text>
          <Text
            style={{fontSize: 16, marginHorizontal: 10, fontFamily: 'poppins'}}>
            We are a company that helps you to invest in Livestock Industry. We
            believe that investing in this industry is very encouraging for both
            of you and the breeder. The more you invest you also participating
            in GoGreen because of the flow that require breeder and farmer
            around to be participated and making the world greener.{' '}
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

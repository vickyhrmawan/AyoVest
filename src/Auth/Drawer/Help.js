import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Help extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={design.textHeader}>Help</Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/img/Group91.png')}
            style={{
              width: width / 1.3,
              height: width / 1.3,
              alignSelf: 'center',
              marginVertical: 20,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                margin: 10,
                fontFamily: 'poppins',
                fontWeight: 'bold',
              }}>
              How can we help you?
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 10,
                marginVertical: width / 20,
                textAlign: 'center',
                fontFamily: 'poppins',
              }}>
              It looks like you are experiencing problems with our sign up
              process. We are here to help so please get in touch with us
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="mail"
                  size={width / 15}
                  color={colorCSS.greenlogo}
                />
                <Icon
                  name="phone"
                  size={width / 15}
                  color={colorCSS.greenlogo}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 10,
                    fontFamily: 'poppins',
                    fontWeight: 'bold',
                  }}>
                  help@ayovest.com
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 10,
                    fontFamily: 'poppins',
                    fontWeight: 'bold',
                  }}>
                  0822 5678 4040
                </Text>
              </View>
            </View>
          </View>
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

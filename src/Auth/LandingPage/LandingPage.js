import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Entypo';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';

export default class Landing extends Component {
  render() {
    return (
      // <ImageBackground
      //   source={require('../../../assets/img/farm-compress1.jpg')}
      //   imageStyle={{opacity: 0.5}}>
      <View style={{flex: 1, backgroundColor: colorCSS.white}}>
        <View style={{flex: 1, marginVertical: 20}}>
          <View style={{flex: 1}}>
            <Swiper
              showsButtons={false}
              dot={
                <View
                  style={{
                    backgroundColor: colorCSS.gray,
                    width: 8,
                    height: 8,
                    borderRadius: 7,
                    marginLeft: 7,
                    marginRight: 7,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: colorCSS.darkgreen,
                    width: 8,
                    height: 8,
                    borderRadius: 7,
                    marginLeft: 7,
                    marginRight: 7,
                  }}
                />
              }>
              <View style={{alignItems: 'center', marginHorizontal: 10}}>
                <Icon
                  name="bar-graph"
                  size={150}
                  style={{color: colorCSS.darkgreen}}
                />
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  Buy Livestock Investments
                </Text>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Choose from all variant of Livestock. Discover a lot of
                  opportunities regarding Investment just by browsing it through
                  your phone.
                </Text>
              </View>
              <View style={{alignItems: 'center', marginHorizontal: 10}}>
                <Icon
                  name="circular-graph"
                  size={150}
                  style={{color: colorCSS.darkgreen}}
                />
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  Get High Return
                </Text>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Everyone is mutually profitted. Get profit periodically and
                  track your investment from this app.
                </Text>
              </View>
            </Swiper>
          </View>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={design.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <View>
              <Text style={design.textButton}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={design.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <View>
              <Text style={design.textButton}>Browse Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      // </ImageBackground>
    );
  }
}

import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HowItWorks extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={design.textHeader}>How It Works</Text>
        <Swiper showsButtons={false}>
          <View style={design.slide}>
            <Image
              source={require('../../../assets/img/howitworks4.png')}
              style={{width: width / 1.75, height: width / 2.3}}
            />
            <Text style={design.sliderText}>
              Pick what you like from all Livestock varieties that are available
            </Text>
          </View>
          <View style={design.slide}>
            <Image
              source={require('../../../assets/img/howitworks2.png')}
              style={{width: width / 2, height: width / 2.1}}
            />
            <Text style={design.sliderText}>
              {' '}
              Choose one and start investing
            </Text>
          </View>
          <View style={design.slide}>
            <Image
              source={require('../../../assets/img/howitworks3.png')}
              style={{width: width / 2, height: width / 2}}
            />
            <Text style={design.sliderText}>The money will works for you</Text>
          </View>
          <View style={design.slide}>
            <Image
              source={require('../../../assets/img/howitworks1.png')}
              style={{width: width / 2, height: width / 2.1}}
            />
            <Text style={design.sliderText}>
              Get profit profit and profit after certain time!
            </Text>
          </View>
        </Swiper>
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

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

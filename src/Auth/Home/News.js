import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import colorCSS from '../css/Color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class News extends Component {
  render() {
    console.log('tes');
    return (
      <View style={{backgroundColor: colorCSS.greenlogo, flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 36,
            color: '#FFFFFF',
            fontFamily: 'poppins',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          AYOvest
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colorCSS.white,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderTopWidth: 8,
              borderLeftWidth: 8,
              borderRightWidth: 8,
              borderColor: colorCSS.white,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('cow')}>
              <View
                style={{
                  backgroundColor: colorCSS.greenlogo,
                  padding: 5,
                  borderWidth: 8,
                  borderColor: colorCSS.white,
                  width: width / 2.25,
                  height: width / 2.25,
                  borderRadius: 15,
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/img/cowIcon.png')}
                  tintColor="white"
                  style={{
                    width: width / 4,
                    height: width / 4,
                    margin: 10,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'poppins',
                    fontWeight: '300',
                    fontSize: 22,
                    lineHeight: 34,
                    color: colorCSS.white,
                  }}>
                  Cow
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('chicken')}>
              <View
                style={{
                  backgroundColor: colorCSS.greenlogo,
                  padding: 5,
                  borderWidth: 8,
                  borderColor: colorCSS.white,
                  width: width / 2.25,
                  height: width / 2.25,
                  borderRadius: 15,
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/img/chickenIcon.png')}
                  tintColor="white"
                  style={{
                    width: width / 4,
                    height: width / 4,
                    margin: 10,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'poppins',
                    fontWeight: '300',
                    fontSize: 22,
                    lineHeight: 34,
                    color: colorCSS.white,
                  }}>
                  Chicken
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colorCSS.white,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              borderBottomWidth: 8,
              borderLeftWidth: 8,
              borderRightWidth: 8,
              borderColor: colorCSS.white,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('goat')}>
              <View
                style={{
                  backgroundColor: colorCSS.greenlogo,
                  padding: 5,
                  borderWidth: 8,
                  borderColor: colorCSS.white,
                  width: width / 2.25,
                  height: width / 2.25,
                  borderRadius: 15,
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/img/goatIcon.png')}
                  tintColor="white"
                  style={{
                    width: width / 4,
                    height: width / 4,
                    margin: 10,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'poppins',
                    fontWeight: '300',
                    fontSize: 22,
                    lineHeight: 34,
                    color: colorCSS.white,
                  }}>
                  Goat
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('duck')}>
              <View
                style={{
                  backgroundColor: colorCSS.greenlogo,
                  padding: 5,
                  borderWidth: 8,
                  borderColor: colorCSS.white,
                  width: width / 2.25,
                  height: width / 2.25,
                  borderRadius: 15,
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/img/duckIcon.png')}
                  tintColor="white"
                  style={{
                    width: width / 4,
                    height: width / 4,
                    margin: 10,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'poppins',
                    fontWeight: '300',
                    fontSize: 22,
                    lineHeight: 34,
                    color: colorCSS.white,
                  }}>
                  Duck
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

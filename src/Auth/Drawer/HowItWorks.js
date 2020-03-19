import React, {Component} from 'react';
import {Text, View, Image, Dimensions, ScrollView} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HowItWorks extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Image
          source={require('../../../assets/img/ayovest-logo.png')}
          style={{
            width: 280,
            height: 200,
            alignSelf: 'center',
            marginVertical: 30,
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',

            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View style={{flex: 0}}>
            <Image
              source={require('../../../assets/img/pickfield.jpg')}
              style={{height: 110, width: 110}}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: width / 20,
            }}>
            <Text
              style={{
                lineHeight: height / 35,
                letterSpacing: 0.5,
                fontSize: 20,
                color: 'green',
              }}>
              Pick all varieties of Livestock that you want{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',

            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: width / 20,
            }}>
            <Text
              style={{
                lineHeight: height / 35,
                letterSpacing: 0.5,
                fontSize: 20,
                color: 'green',
              }}>
              Pick what you like and start investing{' '}
            </Text>
          </View>
          <View style={{flex: 0}}>
            <Image
              source={require('../../../assets/img/picklivestock.jpg')}
              style={{height: 110, width: 110}}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',

            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View style={{flex: 0}}>
            <Image
              source={require('../../../assets/img/pickfarmer.jpg')}
              style={{height: 110, width: 110}}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: width / 20,
            }}>
            <Text
              style={{
                lineHeight: height / 35,
                letterSpacing: 0.5,
                fontSize: 20,
                color: 'green',
              }}>
              The breeder will do his utmost to take care of your investments{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',

            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: width / 20,
            }}>
            <Text
              style={{
                lineHeight: height / 35,
                letterSpacing: 0.5,
                fontSize: 20,
                color: 'green',
              }}>
              Get profit profit and profit after certain time!{' '}
            </Text>
          </View>
          <View style={{flex: 0}}>
            <Image
              source={require('../../../assets/img/pickgrass.jpg')}
              style={{height: 110, width: 110}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

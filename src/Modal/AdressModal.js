import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {closeAdressDetail} from '../redux/action/AuthAction';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class AdressModal extends Component {
  render() {
    const {profile} = this.props.auth;

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={design.textHeader}>AYOvest</Text>
        <TouchableOpacity
          onPress={() => this.props.closeAdressDetail()}
          style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            top: 5,
            padding: 5,
          }}>
          <Icon name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontFamily: 'poppins',
              textAlign: 'center',
              fontSize: 18,
              marginVertical: 20,
              color: 'gray',
            }}>
            Address
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 10,
              backgroundColor: 'white',
              elevation: 8,
            }}>
            <View
              style={{
                width: width / 3,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Country
              </Text>
            </View>
            <View
              style={{
                width: width / 1.97,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                {profile.country}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 10,
              backgroundColor: 'white',
              elevation: 8,
            }}>
            <View
              style={{
                width: width / 3,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Province
              </Text>
            </View>
            <View
              style={{
                width: width / 1.97,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                {profile.province}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 10,
              backgroundColor: 'white',
              elevation: 8,
            }}>
            <View
              style={{
                width: width / 3,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                City
              </Text>
            </View>
            <View
              style={{
                width: width / 1.97,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                {profile.city}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 10,
              backgroundColor: 'white',
              elevation: 8,
            }}>
            <View
              style={{
                width: width / 3,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Address
              </Text>
            </View>
            <View
              style={{
                width: width / 1.97,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                {profile.address}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              marginVertical: 10,
              backgroundColor: 'white',
              elevation: 8,
            }}>
            <View
              style={{
                width: width / 3,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Postal Code
              </Text>
            </View>
            <View
              style={{
                width: width / 1.97,
                paddingHorizontal: 10,
                paddingVertical: 25,
              }}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                {profile.postal_code + ''}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {closeAdressDetail})(AdressModal);

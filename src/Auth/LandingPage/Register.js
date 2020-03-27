import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {register} from '../../redux/action/AuthAction';
import {connect} from 'react-redux';
import {design} from '../css/Styles';
import Loadingscreen from '../css/Loadingscreen';
import colorCSS from '../css/Color';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      phone_number: '',
      password: '',
      password_confirmation: '',
    };
  }
  render() {
    console.log('fullname', this.state.fullname);
    console.log('email', this.state.email);
    console.log('phone_number', this.state.phone_number);
    console.log('password', this.state.password);
    console.log('password_confirmation', this.state.password_confirmation);
    return (
      <KeyboardAvoidingView
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        behavior="padding"
        enabled>
        <ImageBackground
          source={require('../../../assets/img/backgroundayo.jpg')}
          style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
          <Loadingscreen visible={this.props.auth.isloading} />
          <Image
            source={require('../../../assets/img/AYOvest.png')}
            style={{
              marginVertical: width / 15,
              width: width / 1.7,
              height: width / 9,
              alignSelf: 'center',
            }}
            tintColor="white"
          />
          <Text style={design.textTitle}>Full Name</Text>
          <TextInput
            onChangeText={value => this.setState({fullname: value})}
            style={design.textInput}
          />
          <Text style={design.textTitle}>Email Adress</Text>
          <TextInput
            keyboardType="email-address"
            style={design.textInput}
            onChangeText={value => this.setState({email: value})}
          />
          <Text style={design.textTitle}>Phone Number</Text>
          <TextInput
            keyboardType="number-pad"
            style={design.textInput}
            onChangeText={value => this.setState({phone_number: value})}
          />
          <Text style={design.textTitle}>Password</Text>
          <TextInput
            onChangeText={value => this.setState({password: value})}
            secureTextEntry
            style={design.textInput}
          />
          <Text style={design.textTitle}>Password Confirmation</Text>
          <TextInput
            onChangeText={value =>
              this.setState({password_confirmation: value})
            }
            secureTextEntry
            style={design.textInput}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: width / 12,
            }}>
            <Text
              style={{
                fontFamily: 'poppins',
                fontSize: width / 8,
                color: colorCSS.white,
              }}>
              Sign Up
            </Text>
            <TouchableOpacity
              style={{
                width: width / 5,
                height: width / 5,
                backgroundColor: colorCSS.white,
                padding: 15,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                this.props.register(
                  this.state.fullname,
                  this.state.email,
                  this.state.phone_number,
                  this.state.password,
                  this.state.password_confirmation,
                )
              }>
              <Icon name="arrow-right" size={30} color={colorCSS.greenlogo} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: width / 25,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text
                style={{
                  color: colorCSS.white,
                  fontFamily: 'poppins',
                  textAlign: 'left',
                  fontSize: 17,
                  borderBottomWidth: 1,
                  borderBottomColor: colorCSS.white,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: colorCSS.white,
                  fontFamily: 'poppins',
                  textAlign: 'right',
                  fontSize: 17,
                  borderBottomWidth: 1,
                  borderBottomColor: colorCSS.white,
                }}>
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {register})(Register);

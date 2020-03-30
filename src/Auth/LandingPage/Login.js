import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {design} from '../css/Styles';
import {login} from '../../redux/action/AuthAction';
import {connect} from 'react-redux';
import Loadingscreen from '../css/Loadingscreen';
import Modal from 'react-native-modal';
import Axios from 'axios';
import colorCSS from '../css/Color';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const keyboardVerticalOffset = Platform.OS === 'android' ? 40 : 0;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  forgotPassword = async email => {
    try {
      const res = await Axios.post(
        'https://ayo-vest.herokuapp.com/api/v1/investors/recover',
        {
          email: email,
        },
      );
      console.log(res.data);
      alert(res.data.data.message);
    } catch (e) {
      console.log('error register', e);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Loadingscreen visible={this.props.auth.isloading} />
        <View
          style={{
            backgroundColor: colorCSS.greenlogo,
            height: height / 2.2,
            borderRadius: 30,
            top: -width / 15,
          }}>
          <Image
            source={require('../../../assets/img/AYOvest.png')}
            style={{
              top: width / 7,
              width: width / 1.7,
              height: width / 9,
              alignSelf: 'center',
            }}
            tintColor="white"
          />
          <Image
            source={require('../../../assets/img/Group95.png')}
            style={{
              top: width / 7,
              width: width / 2.5,
              height: width / 2.5,
              alignSelf: 'center',
              marginTop: width / 15,
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 15,
            fontFamily: 'poppins',
            color: colorCSS.gray,
          }}>
          Email
        </Text>
        <TextInput
          onChangeText={value => this.setState({email: value})}
          keyboardType="email-address"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colorCSS.gray,
            marginLeft: 15,
            marginRight: 15,
            fontSize: 15,
            fontFamily: 'poppins',
            color: colorCSS.gray,
            maxHeight: 43,
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 15,
            fontFamily: 'poppins',
            color: colorCSS.gray,
          }}>
          Password
        </Text>
        <TextInput
          onChangeText={value => this.setState({password: value})}
          secureTextEntry
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colorCSS.gray,
            marginLeft: 15,
            marginRight: 15,
            fontSize: 15,
            fontFamily: 'poppins',
            color: colorCSS.gray,
            maxHeight: 43,
          }}
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
              color: colorCSS.gray,
            }}>
            Sign In
          </Text>
          <TouchableOpacity
            style={{
              width: width / 5,
              height: width / 5,
              backgroundColor: colorCSS.greenlogo,
              padding: 15,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={async () => {
              await this.props.login(this.state.email, this.state.password);
              if (this.props.auth.myToken !== 'guest') {
                this.props.navigation.navigate('Home');
              } else alert('Wrong Email/Password');
            }}>
            <Icon name="arrow-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: width / 25,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text
              style={{
                color: colorCSS.gray,
                fontFamily: 'poppins',
                textAlign: 'left',
                fontSize: 17,
                borderBottomWidth: 1,
                borderBottomColor: colorCSS.gray,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleModal}>
            <Text
              style={{
                color: colorCSS.gray,
                fontFamily: 'poppins',
                textAlign: 'right',
                fontSize: 17,
                borderBottomWidth: 1,
                borderBottomColor: colorCSS.gray,
              }}>
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
                height: '50%',
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 20,
                borderColor: colorCSS.greenlogo,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'poppins',
                  color: colorCSS.gray,
                }}>
                Input your email :{' '}
              </Text>
              <TextInput
                onChangeText={value => this.setState({email: value})}
                style={{
                  borderWidth: 1,
                  borderColor: colorCSS.gray,
                  borderRadius: 10,
                  margin: 5,
                  paddingHorizontal: 20,
                  fontWeight: '500',
                  width: width / 1.5,
                }}
                placeholderTextColor={colorCSS.gray}
              />
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.forgotPassword(this.state.email)}>
                  <Text
                    style={{
                      backgroundColor: colorCSS.greenlogo,
                      borderRadius: 10,
                      color: 'white',
                      fontSize: 15,
                      fontFamily: 'poppins',
                      padding: 5,
                      marginHorizontal: 5,
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Text
                    style={{
                      backgroundColor: colorCSS.greenlogo,
                      borderRadius: 10,
                      color: 'white',
                      fontSize: 15,
                      fontFamily: 'poppins',
                      padding: 5,
                      marginHorizontal: 5,
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {login})(Login);

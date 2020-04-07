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
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

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
      userInfo: null,
      gettingLoginStatus: true,
    };
  }

  componentDidMount() {
    //initial configuration
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '546283393382-dke3agph4ulunsavffhvv6f5mjtoltbr.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      this.setState({userInfo: userInfo});
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  render() {
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
            {/* <TouchableOpacity>
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
            </TouchableOpacity> */}
            <GoogleSigninButton
              style={{width: width / 2, height: width / 10}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this._signIn}
              // disabled={this.state.isSigninInProgress}
            />
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

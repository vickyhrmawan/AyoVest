import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {design} from '../css/Styles';
import {login} from '../../redux/action/AuthAction';
import {connect} from 'react-redux';
import Loadingscreen from '../css/Loadingscreen';
import Modal from 'react-native-modal';
import Axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    console.log('email :', this.state.email);
    console.log('password :', this.state.password);
    console.log('token :', this.state.token);
    console.log('login ', this.props.token !== '');

    // console.log(this.props.auth);
    return (
      <View>
        <Loadingscreen visible={this.props.auth.isloading} />
        <Text
          style={{
            marginTop: 20,
            marginBottom: 40,
            marginLeft: 15,
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <Text style={{marginLeft: 20, fontSize: 20}}>Email Adress</Text>
        <TextInput
          onChangeText={value => this.setState({email: value})}
          keyboardType="email-address"
          style={{
            borderBottomWidth: 1,
            marginLeft: 15,
            marginRight: 15,
            fontSize: 20,
          }}></TextInput>
        <Text style={{marginLeft: 20, fontSize: 20}}>Password</Text>
        <TextInput
          onChangeText={value => this.setState({password: value})}
          secureTextEntry
          style={{
            borderBottomWidth: 1,
            marginLeft: 15,
            marginRight: 15,
            fontSize: 20,
          }}></TextInput>
        <TouchableOpacity onPress={this.toggleModal}>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'right',
              marginRight: 15,
              fontSize: 20,
              marginBottom: 20,
            }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={design.button}
          onPress={async () => {
            await this.props.login(this.state.email, this.state.password);
            if (this.props.auth.token !== 'guest') {
              this.props.navigation.navigate('Home');
            } else alert('Wrong Email/Password');
          }}>
          <Text style={design.textButton}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={{textAlign: 'center', fontSize: 17}}>
            Don't have an accout?{' '}
            <Text style={{color: 'green', fontWeight: 'bold'}}>
              Register Now
            </Text>
          </Text>
        </TouchableOpacity>
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
                borderWidth: 5,
                borderRadius: 20,
                borderColor: 'green',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Input your email :{' '}
              </Text>
              <TextInput
                onChangeText={value => this.setState({email: value})}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 5,
                  paddingHorizontal: 20,
                  fontWeight: '500',
                  width: width / 1.5,
                }}
                placeholderTextColor="black"
              />
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.forgotPassword(this.state.email)}>
                  <Text
                    style={{
                      backgroundColor: 'green',
                      borderRadius: 10,
                      color: 'white',
                      fontSize: 15,
                      fontWeight: 'bold',
                      padding: 5,
                      marginHorizontal: 5,
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Text
                    style={{
                      backgroundColor: 'green',
                      borderRadius: 10,
                      color: 'white',
                      fontSize: 15,
                      fontWeight: 'bold',
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {login})(Login);

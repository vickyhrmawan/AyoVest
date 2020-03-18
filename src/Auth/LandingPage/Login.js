import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {design} from '../css/Styles';
import {login} from '../../redux/action/AuthAction';
import {connect} from 'react-redux';
import Loadingscreen from '../css/Loadingscreen';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
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
          }}></TextInput>
        <Text style={{marginLeft: 20, fontSize: 20}}>Password</Text>
        <TextInput
          onChangeText={value => this.setState({password: value})}
          secureTextEntry
          style={{
            borderBottomWidth: 1,
            marginLeft: 15,
            marginRight: 15,
          }}></TextInput>
        <TouchableOpacity>
          {/* <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'right',
              marginRight: 15,
              fontSize: 20,
              marginBottom: 20,
            }}>
            Forgot your password?
          </Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={design.button}
          onPress={async () => {
            await this.props.login(this.state.email, this.state.password);
            if (this.props.token !== '') {
              this.props.navigation.navigate('Home');
              console.log(typeof this.props.token);
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  token: state.auth.user.data.token,
});

export default connect(mapStateToProps, {login})(Login);

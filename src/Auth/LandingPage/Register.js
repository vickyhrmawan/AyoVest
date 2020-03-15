import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {register} from '../../redux/action/AuthAction';
import {connect} from 'react-redux';
import {design} from '../css/Styles';
import Loadingscreen from '../css/Loadingscreen';

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
        <ScrollView>
          <Loadingscreen visible={this.props.auth.isloading} />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 15,
              marginBottom: 50,
              marginTop: 30,
            }}>
            Register{' '}
          </Text>
          <Text style={{marginLeft: 20, fontSize: 20}}>Full Name</Text>
          <TextInput
            onChangeText={value => this.setState({fullname: value})}
            style={design.textInput}
          />
          <Text style={{marginLeft: 20, fontSize: 20}}>Email Adress</Text>
          <TextInput
            keyboardType="email-address"
            style={design.textInput}
            onChangeText={value => this.setState({email: value})}
          />
          <Text style={{marginLeft: 20, fontSize: 20}}>Phone Number</Text>
          <TextInput
            keyboardType="number-pad"
            style={design.textInput}
            onChangeText={value => this.setState({phone_number: value})}
          />
          <Text style={{marginLeft: 20, fontSize: 20}}>Password</Text>
          <TextInput
            onChangeText={value => this.setState({password: value})}
            secureTextEntry
            style={design.textInput}
          />
          <Text style={{marginLeft: 20, fontSize: 20}}>
            Password Confirmation
          </Text>
          <TextInput
            onChangeText={value =>
              this.setState({password_confirmation: value})
            }
            secureTextEntry
            style={design.textInput}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#20cb9d',
              alignItems: 'center',
              paddingVertical: 10,
              margin: 20,
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
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', fontSize: 17}}>
              Already have an account?{' '}
              <Text style={{color: 'green', fontWeight: 'bold'}}>
                Login Now
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {register})(Register);

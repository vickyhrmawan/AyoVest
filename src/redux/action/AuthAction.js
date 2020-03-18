import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import * as Keychain from 'react-native-keychain';

export const register = (
  fullname,
  email,
  phone_number,
  password,
  password_confirmation,
) => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    try {
      const res = await Axios.post(
        'http://ayo-vest.herokuapp.com/api/v1/investors',
        {
          fullname: fullname,
          email: email,
          phone_number: phone_number,
          password: password,
          password_confirmation: password_confirmation,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
      console.log('response success', res.data);
      alert(res.data.message);
      dispatch({type: 'ISLOADING', payload: false});
    } catch (e) {
      console.log('error register', e.response.data);
      alert(res.data.message);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

export const login = (email, password) => {
  console.log(email, password);
  return async dispatch => {
    try {
      dispatch({type: 'ISLOADING', payload: true});
      const res = await Axios.post(
        'http://ayo-vest.herokuapp.com/api/v1/investors/auth',
        {
          email: email,
          password: password,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      );

      AsyncStorage.setItem('token', res.data.data.jwt_token);
      // await Keychain.resetGenericPassword();
      // await Keychain.setGenericPassword(
      //   res.data.data.email,
      //   res.data.data.token,
      // );

      console.log('response login', res.data);
      dispatch({type: 'LOGIN', payload: res.data});
      dispatch({type: 'ISLOADING', payload: false});
    } catch (e) {
      console.log('error register', e);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

export const getToken = () => {
  return async dispatch => {
    try {
      const findToken = await AsyncStorage.getItem('token');
      if (findToken) {
        if (findToken !== 'guest') {
          dispatch({type: 'TOKEN', payload: findToken});
        } else {
          AsyncStorage.setItem('token', 'guest');
        }
      } else {
        AsyncStorage.setItem('token', 'guest');
      }
    } catch (error) {
      console.log('error register', error);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await dispatch({type: 'TOKEN', payload: 'guest'});
      dispatch({type: 'LOGOUT'});
    } catch (error) {
      console.log('error register', error);
    }
  };
};

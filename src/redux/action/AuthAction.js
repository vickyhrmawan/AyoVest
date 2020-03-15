import Axios from 'axios';
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
      alert('Please check your entries again');
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

export const getLivestockDetail = async idLivestock => {
  try {
    let res = await axios.get(
      `http://ayo-vest.herokuapp.com/api/v1/livestocks/getone?id=${idLivestock}`,
    );
    console.log(res);
    this.setState({persons: res.data.data.docs});
    this.setState({title: 'cok'});
    console.log(this.state.persons);
  } catch (error) {
    console.log('error persons ', error);
  }
};

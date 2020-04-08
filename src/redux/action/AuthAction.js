import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {getInvestment} from './LivestockAction';

const baseUrl = 'https://ayo-vest.herokuapp.com/api/v1';
// const baseUrl = process.env.REACT_APP_BASE_URL;
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
        `${baseUrl}/investors`,
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
      console.log('error register', e);
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
        `${baseUrl}/investors/auth`,
        {
          email: email,
          password: password,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      );

      AsyncStorage.setItem('token', res.data.data.jwt_token);

      await dispatch(getProfile(res.data.data.jwt_token));
      dispatch(getToken());
      dispatch(getInvestment(res.data.data.jwt_token));
      // console.log('response login', res.data);
      await dispatch({type: 'LOGIN', payload: res.data.data});
      await dispatch({type: 'ISLOADING', payload: false});
    } catch (e) {
      console.log('error register', e);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

export const uploadImage = (token, response) => {
  console.log('tokenimage', token, response);
  return async dispatch => {
    try {
      dispatch({type: 'ISLOADING', payload: true});
      const dataForm = new FormData();
      dataForm.append('photo_profile', {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      });
      const uploadImageProfile = await Axios.put(
        `${baseUrl}/investors`,
        dataForm,
        {
          headers: {
            accept: 'image/png',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          },
        },
      );
      console.log('proses upload', uploadImageProfile.data);
      const responseUser = await Axios.get(
        `${baseUrl}/investors/current-user`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );
      console.log('after upload image', responseUser.data);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'GETPROFILE', payload: responseUser.data.data});
    } catch (e) {
      dispatch({type: 'ISLOADING', payload: false});
      console.log('error upload image', e);
    }
  };
};

export const updateProfile = (
  token,
  fullname,
  phone_number,
  dob,
  country,
  province,
  city,
  address,
  postal_code,
) => {
  return async dispatch => {
    dispatch({type: 'ISLOADING', payload: true});
    const dataForm = new FormData();
    dataForm.append('fullname', fullname);
    dataForm.append('phone_number', phone_number);
    dataForm.append('dob', dob);
    dataForm.append('country', country);
    dataForm.append('province', province);
    dataForm.append('city', city);
    dataForm.append('address', address);
    dataForm.append('postal_code', postal_code);

    try {
      const res = await Axios.put(`${baseUrl}/investors`, dataForm, {
        headers: {'Content-Type': 'application/json', Authorization: token},
      });
      console.log('habis update nama', res.data);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'GETPROFILE', payload: res.data.data});
      dispatch({type: 'SHOW_PROFILE', payload: false});
    } catch (e) {
      dispatch({type: 'ISLOADING', payload: false});
      console.log('error upload image', e);
    }
  };
};

export const getToken = () => {
  console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
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
      await dispatch({type: 'LOGOUT'});
      dispatch({type: 'TOKEN', payload: 'guest'});
      dispatch({type: 'ISLOADING', payload: false});
    } catch (error) {
      console.log('error register', error);
    }
  };
};

export const setProfileDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_PROFILE', payload: true});
  };
};

export const closeProfileDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_PROFILE', payload: false});
  };
};

export const setAdressDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_ADRESS', payload: true});
  };
};

export const closeAdressDetail = () => {
  return dispatch => {
    dispatch({type: 'SHOW_ADRESS', payload: false});
  };
};

export const setUpdateProfile = () => {
  return dispatch => {
    dispatch({type: 'SHOW_UPDATE', payload: true});
  };
};

export const closeUpdateProfile = () => {
  return dispatch => {
    dispatch({type: 'SHOW_UPDATE', payload: false});
  };
};

export const getProfile = token => {
  return async dispatch => {
    try {
      dispatch({type: 'ISLOADING', payload: true});
      const res = await Axios.get(`${baseUrl}/investors/current-user`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      console.log('get profile', res.data);
      dispatch({type: 'ISLOADING', payload: false});
      dispatch({type: 'GETPROFILE', payload: res.data.data});
    } catch (e) {
      console.log('error register', e);
      dispatch({type: 'ISLOADING', payload: false});
    }
  };
};

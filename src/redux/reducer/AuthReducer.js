import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  isloading: false,
  user: {
    data: {
      email: '',
      fullname: '',
      id: '',
      token: '',
    },
  },
  data: '',
  name: null,
  myToken: 'guest',
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ISLOADING':
      return {...state, isloading: action.payload};
    case 'LOGIN':
      return {...state, user: action.payload};
    case 'TOKEN':
      return {...state, myToken: action.payload};
    case 'LOGOUT':
      AsyncStorage.clear();
      alert('You are successfully Logout');
      return false;
    default:
      return state;
  }
};

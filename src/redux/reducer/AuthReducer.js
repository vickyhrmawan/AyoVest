import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  isloading: false,
  user: {},
  data: '',
  name: null,
  myToken: 'guest',
  modalProfile: false,
  modalAdress: false,
  modalUpdate: false,
  // profile: {},
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ISLOADING':
      return {...state, isloading: action.payload};
    // case 'GETPROFILE':
    //   return {...state, profile: action.payload};
    case 'LOGIN':
      return {...state, user: action.payload};
    case 'TOKEN':
      return {...state, myToken: action.payload};
    case 'SHOW_PROFILE':
      return {...state, modalProfile: action.payload};
    case 'SHOW_ADRESS':
      return {...state, modalAdress: action.payload};
    case 'SHOW_UPDATE':
      return {...state, modalUpdate: action.payload};
    case 'LOGOUT':
      AsyncStorage.clear();
      alert('You are successfully Logout');
      return false;
    default:
      return state;
  }
};

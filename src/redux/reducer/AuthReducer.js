import {bindActionCreators} from 'redux';

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
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ISLOADING':
      return {...state, isloading: action.payload};
    case 'LOGIN':
      return {...state, user: action.payload};
    default:
      return state;
  }
};

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

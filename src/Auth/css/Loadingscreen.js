import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Modal} from 'react-native';

export default class Loadingscreen extends Component {
  render() {
    return (
      <Modal visible={this.props.visible} transparent={true}>
        <View
          style={{
            backgroundColor: 'rgba(191,191,191,0.3)',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ActivityIndicator size={50} animating={this.props.visible} />
        </View>
      </Modal>
    );
  }
}

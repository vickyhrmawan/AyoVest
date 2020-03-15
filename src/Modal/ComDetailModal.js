import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {setModalDetail} from '../redux/action/LivestockAction';

class ComDetailModal extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <TouchableOpacity onPress={() => this.props.setModalDetail()}>
            <Text>CLOSE MODAL</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
});

export default connect(mapStateToProps, {setModalDetail})(ComDetailModal);

import React, {Component} from 'react';
import {ScrollView, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class IconTab extends Component {
  render() {
    return (
      <View>
        {this.props.auth.myToken === 'guest' ||
        this.props.auth.myToken === undefined ? (
          <Icon name="user" size={20} color={this.props.tintColor} />
        ) : (
          <Image
            style={{
              width: width / 15,
              height: width / 15,
              borderRadius: 63,
              borderWidth: 4,
            }}
            source={{
              uri: this.props.auth.profile.profile_picture,
            }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(IconTab);

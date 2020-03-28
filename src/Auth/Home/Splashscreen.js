import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import colorCSS from '../css/Color';
import {connect} from 'react-redux';
import {
  getLivestock,
  getLivestockId,
  moreLivestock,
  getInvestment,
} from '../../redux/action/LivestockAction';
import {getToken, getProfile} from '../../redux/action/AuthAction';

class Splashscreen extends Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    await this.props.getToken();
    console.log('dapat token.', this.props.auth.myToken);
    await this.props.getLivestock();
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  // async componentDidMount() {
  //   await this.props.getToken();
  //   console.log('dapat token.', this.props.auth.myToken);
  //   await this.props.getLivestock();
  //   await this.props.getProfile(this.props.auth.myToken);
  //   await this.props.getInvestment(this.props.auth.myToken);
  // }

  render() {
    const width = Dimensions.get('window').width;
    return (
      <View style={styles.viewStyles}>
        <Image
          source={require('../../../assets/img/AYOvest.png')}
          style={{width: width / 1.5, height: width / 8}}
        />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
};

const mapStateToProps = state => ({
  livestock: state.livestock,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getLivestock,
  getToken,
})(Splashscreen);

import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import colorCSS from '../css/Color';

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
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

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

export default Splashscreen;

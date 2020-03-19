import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

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
          source={require('../../../assets/img/ayovest-logo.png')}
          style={{width: 320, height: 230}}
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

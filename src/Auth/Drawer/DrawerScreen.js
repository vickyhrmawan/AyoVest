import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import colorCSS from '../css/Color';
import {design} from '../css/Styles';

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    return (
      // <View style={{flex: 1, backgroundColor: colorCSS.greenlogo}}>
      <LinearGradient
        colors={[
          colorCSS.greenlogo,
          colorCSS.greenlogo,
          colorCSS.greenlogo1,
          colorCSS.greenlogo2,
        ]}
        style={{flex: 1, opacity: 0.7}}>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: colorCSS.white,
            marginHorizontal: 15,
            justifyContent: 'flex-end',
          }}>
          <Text style={design.profileName}>Agus Mulyono</Text>
        </View>
        <View style={{flex: 3}}>
          <View>
            <Text
              onPress={this.navigateToScreen('Profile')}
              style={design.menuList}>
              <Icon name="user" size={20} /> My Profile
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('HowItWorks')}
              style={design.menuList}>
              <Icon name="file-text-o" size={20} /> How it works
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('AboutUs')}
              style={design.menuList}>
              <Icon name="building" size={20} /> About Us
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('ContactUs')}
              style={design.menuList}>
              <Icon name="phone-square" size={20} /> Contact Us
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('Help')}
              style={design.menuList}>
              <Icon name="question-circle-o" size={20} /> Help
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('Login')}
              style={design.menuList}>
              <Icon name="power-off" size={20} /> Logout
            </Text>
          </View>
        </View>
        {/* </View> */}
      </LinearGradient>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object,
};

export default DrawerScreen;

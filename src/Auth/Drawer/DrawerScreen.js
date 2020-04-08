import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, ToastAndroid} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import colorCSS from '../css/Color';
import {design} from '../css/Styles';
import {connect} from 'react-redux';
import {logout} from '../../redux/action/AuthAction';

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };
  showToast = () => {
    ToastAndroid.show("Logout Successful!", ToastAndroid.SHORT);
  };

  render() {
    const {myToken} = this.props.auth;
    console.log(myToken);

    return (
      <View style={{flex: 1}}>
        {/* <LinearGradient
        colors={[
          colorCSS.greenlogo,
          colorCSS.greenlogo,
          colorCSS.greenlogo1,
          colorCSS.greenlogo2,
        ]}
        style={{flex: 1, opacity: 0.7}}> */}
        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: colorCSS.white,
            marginHorizontal: 15,
            justifyContent: 'flex-end',
          }}>
        </View>
        <View style={{flex: 3}}>
          <View>
            {myToken === 'guest' ? (
              <Text
                onPress={this.navigateToScreen('Login')}
                style={design.menuList}>
                <Icon name="sign-in" size={20} color={colorCSS.greenlogo} />
                {'    '}
                Sign In
              </Text>
            ) : null}
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('HowItWorks')}
              style={design.menuList}>
              <Icon name="file-text-o" size={20} color={colorCSS.greenlogo} />
              {'    '} How it works
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('AboutUs')}
              style={design.menuList}>
              <Icon name="building" size={20} color={colorCSS.greenlogo} />
              {'    '} About Us
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('ContactUs')}
              style={design.menuList}>
              <Icon name="phone-square" size={20} color={colorCSS.greenlogo} />
              {'    '} Contact Us
            </Text>
          </View>
          <View>
            <Text
              onPress={this.navigateToScreen('Help')}
              style={design.menuList}>
              <Icon
                name="question-circle-o"
                size={20}
                color={colorCSS.greenlogo}
              />
              {'    '} Help
            </Text>
          </View>
          <View>
            {myToken !== 'guest' ? (
              <Text
                onPress={() =>
                  this.props.logout().then(() => {
                    if (this.props.auth.myToken === 'guest') {
                      this.props.navigation.navigate('Home');
                      this.showToast();
                    }
                  })
                }
                style={design.menuList}>
                <Icon name="power-off" size={20} color={colorCSS.greenlogo} />
                {'    '} Sign Out
              </Text>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object,
};

// export default DrawerScreen;

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(DrawerScreen);

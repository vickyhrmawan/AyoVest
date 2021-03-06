import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import colorCSS from './Auth/css/Color';
//LandingPage
import LandingPage from './Auth/LandingPage/LandingPage';
import Register from './Auth/LandingPage/Register';
import Login from './Auth/LandingPage/Login';
//Home for tab
import Home from './Auth/Home/Home';
import News from './Auth/Home/News';
import CommodityCategory from './Auth/Home/CommodityCategory';
//Drawer
import AboutUs from './Auth/Drawer/AboutUs';
import ContactUs from './Auth/Drawer/ContactUs';
import Help from './Auth/Drawer/Help';
import HowItWorks from './Auth/Drawer/HowItWorks';
import Profile from './Auth/Drawer/Profile';
import DrawerScreen from './Auth/Drawer/DrawerScreen';
import Splashscreen from './Auth/Home/Splashscreen';
//redux
import IconTab from '../src/Auth/css/IconTab';

// class IconTab extends Component {
//   render() {
//     console.log('TOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL', this.props.auth);
//     return (
//       <View>
//         <Icon name="user" size={20} color={this.props.tintColor} />
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   auth: state.auth,
// });
// connect(mapStateToProps)(IconTab);

const AuthNavigator = createStackNavigator({
  LandingPage: {
    screen: LandingPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={20} color={tintColor} />
        ),
      },
    },
    Commodity: {
      screen: CommodityCategory,
      navigationOptions: {
        tabBarLabel: 'Commodity',
        tabBarIcon: ({tintColor}) => (
          <Icon name="line-chart" size={20} color={tintColor} />
        ),
        title: 'Commodity List',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: props => (
          // <Icon name="user" size={20} color={tintColor} />
          <IconTab {...props} />
        ),
        // <IconTab />
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colorCSS.greenlogo,
      inactiveTintColor: colorCSS.gray,
      style: {
        backgroundColor: colorCSS.white,
      },
      indicatorStyle: {
        backgroundColor: colorCSS.black,
      },
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 200,
    drawerType: 'front',
  },
);

const StackNavigator = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      headerShown: false,
    },
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: {
      headerShown: false,
    },
  },
  Help: {
    screen: Help,
    navigationOptions: {
      headerShown: false,
    },
  },
  HowItWorks: {
    screen: HowItWorks,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: Splashscreen,
      // Landing: AuthNavigator,
      MainApp: StackNavigator,
    },
    {initialRouteName: 'Splash'},
  ),
);

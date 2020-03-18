/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splashscreen from './src/Auth/Home/Splashscreen';

AppRegistry.registerComponent(appName, () => Splashscreen);

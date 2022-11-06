/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/app/main/Root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

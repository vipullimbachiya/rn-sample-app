/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import {store, AppWithNavigationState} from './src/store';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Root>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </Root>
    );
  }
}

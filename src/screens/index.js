import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import {SampleFormContainer} from './SampleForm';

const AppNavigator = createStackNavigator(
  {
    SampleForm: SampleFormContainer,
  },
  {
    initialRouteName: 'SampleForm',
    defaultNavigationOptions: {
      title: 'Sample Form',
    },
  },
);

export default createAppContainer(AppNavigator);

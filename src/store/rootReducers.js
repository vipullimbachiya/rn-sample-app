import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import AppNavigator from '../screens';
import {reducer as formReducer} from 'redux-form';
import submitFormReducer from '../screens/SampleForm/redux/reducer';

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  form: formReducer,
  nav: navReducer,
  submit: submitFormReducer,
});

export default appReducer;

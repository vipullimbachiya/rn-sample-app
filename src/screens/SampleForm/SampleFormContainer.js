import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import SampleForm from './SampleForm';
import {required, matchRegEx, email} from '../../utils/validators';
import * as actions from '../SampleForm/redux/actions';

class SampleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.validateRegisterForm = this.validateRegisterForm.bind(this);
  }

  validateRegisterForm = values => {
    const errors = {};

    errors.email = required(values.email) && 'Email is required';
    errors.password = required(values.password) && 'Password is required';
    errors.firstName = required(values.firstName) && 'First Name is required';
    errors.lastName = required(values.lastName) && 'Last Name is required';
    errors.dob = required(values.dob) && 'Date of birth is required';
    errors.phone = required(values.phone) && 'Phone Number is required';
    errors.socialSecurityNo =
      required(values.socialSecurityNo) && 'Social Security No is required';
    errors.maritalStatus =
      required(values.maritalStatus) && 'Marital Status is required';
    errors.dependents = required(values.dependents) && 'Dependents is required';
    errors.employment = required(values.employment) && 'Employment is required';
    errors.experience = required(values.experience) && 'Experience is required';
    errors.city = required(values.city) && 'City is required';
    errors.zipCode = required(values.zipCode) && 'Zip Code is required';
    errors.state = required(values.state) && 'State is required';
    errors.country = required(values.country) && 'Country is required';

    if (!errors.email) {
      errors.email =
        !matchRegEx(values.email, email) && 'Email format is invalid';
    }

    return errors;
  };

  handleRegister = values => {
    console.log({values});
    this.props.submitForm(values);
  };

  render() {
    return (
      <SampleForm
        handleRegister={this.handleRegister}
        validate={this.validateRegisterForm}
        // initialValues={{
        //   city: 'Ahmedabad',
        //   country: 'India',
        //   dependents: 'fsds',
        //   dob: '2019-08-05',
        //   email: 'testme@jsj.jsk',
        //   employment: 'engimner',
        //   experience: '2 years',
        //   firstName: 'Test',
        //   lastName: 'css',
        //   maritalStatus: 'unmarried',
        //   password: 'Abcd!234',
        //   phone: '1022488516',
        //   socialSecurityNo: '73838',
        //   state: 'Guj',
        //   zipCode: '382481',
        // }}
        isSubmitted={this.props.isSubmitted}
      />
    );
  }
}

const mapStateToProps = state => ({
  isSubmitted: state.submit.isSubmitted,
});

const mapDispatchToProps = dispatch => ({
  submitForm: values => dispatch(actions.submitForm(values)),
  formReset: () => dispatch(reset('Login')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleFormContainer);

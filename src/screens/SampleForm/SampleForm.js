import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {View, Text} from 'native-base';
import KeyboardAwareScrollView from '../../shared/components/KeyboardScrollView/index';
import Button from '../../shared/components/Button/Button';
import {styles} from '../../assets/styles/commonStyles';
import CommonInput from '../../shared/components/Input/Input';
import DateInput from '../../shared/components/Input/DatePicker';

const SampleForm = ({valid, handleSubmit, handleRegister, isSubmitted}) =>
  !isSubmitted ? (
    <React.Fragment>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.formContainer, {paddingVertical: 40}]}>
        <Field
          name="email"
          label="Email"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="password"
          label="Password"
          secure={true}
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="firstName"
          label="First Name"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="lastName"
          label="Last Name"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="dob"
          label="Date of birth"
          inputContainerStyle={styles.inputStyle}
          component={DateInput}
        />
        <Field
          name="phone"
          label="Phone"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="socialSecurityNo"
          label="Social Security No"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="maritalStatus"
          label="Marital Status"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="dependents"
          label="Dependents"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="employment"
          label="Employment"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="experience"
          label="Experience"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="city"
          label="City"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="zipCode"
          label="Zip Code"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="state"
          label="State"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
        <Field
          name="country"
          label="Country"
          inputContainerStyle={styles.inputStyle}
          component={CommonInput}
        />
      </KeyboardAwareScrollView>
      <Button
        styleContainer={[styles.btnContainer]}
        disabled={!valid}
        onPress={handleSubmit(handleRegister)}
        styleContainer={[
          styles.btnContainer,
          {backgroundColor: valid ? 'green' : '#DCDDDE'},
        ]}
        disabled={!valid}>
        <Text style={styles.authTitle}>Register</Text>
      </Button>
    </React.Fragment>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'green', fontSize: 20}}>
        Successfully registered thank you
      </Text>
    </View>
  );

export default reduxForm({
  form: 'Sample',
})(SampleForm);

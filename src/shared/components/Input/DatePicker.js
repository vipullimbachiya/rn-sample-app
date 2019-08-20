import React from 'react';
import DatePicker from 'react-native-datepicker';
import {StyleSheet, View, Text} from 'react-native';

const DateInput = ({input, meta: {error, touched, warning}}) => {
  const {value, ...inputProps} = input;
  const date = new Date();
  const today =
    date.getFullYear() +
    '-' +
    parseInt(date.getMonth() + 1) +
    '-' +
    date.getDate();
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.dateTitle}>Date of birth</Text>
        <DatePicker
          style={{width: 200}}
          date={input.value || ''}
          mode="date"
          maxDate={today}
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            input.onChange(date);
          }}
          {...inputProps}
        />
      </View>
      {touched && error ? <Text style={styles.errorText}>{error}</Text> : null}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  dateTitle: {},
});

export default DateInput;

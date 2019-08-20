import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

const Button = ({
  children,
  style,
  disabled,
  activeOpacity = 0.7,
  styleContainer,
  onPress,
  onLongPress,
  label,
  hitSlop,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      activeOpacity={activeOpacity}
      style={[styles.container, styleContainer]}
      onLongPress={onLongPress}
      onPress={onPress}
      hitSlop={hitSlop}
    >
      {label.length > 0 && (
        <Text style={[styles.textColor, style]}>{label}</Text>
      )}
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  label: PropTypes.string,
};
Button.defaultProps = {
  style: {},
  onPress: () => {},
  onLongPress: () => {},
  label: '',
};

const styles = StyleSheet.create({
  textColor: {
    color: '#fff',
  },
});

export default Button;

import { Toast } from 'native-base';
import { StyleSheet, Platform } from 'react-native';

export const showToast = (type, text, btn) => {
  Toast.show({
    text,
    duration: btn === 'ok' ? 0 : 3500,
    position: "top",
    type,
    ...(btn === 'ok' && { buttonText: 'OK' }),
    ...(btn === 'ok' && { buttonStyle: styles.btnStyle }),
    ...(btn === 'ok' && { buttonTextStyle: type === 'danger' ? styles.dangertext : type === 'success' ? styles.successText : styles.warningText }),
    textStyle: styles.toastTitle,
    onClose: () => {
      Toast.hide();
    },
    style: [styles.toast,  Platform.OS === 'android' ?  type === 'success'? { backgroundColor: 'rgba(0, 200, 81, 0.8)' } : 
    type === 'danger' ? { backgroundColor: 'rgba(255, 68, 68, 0.8)'}  : { backgroundColor: 'rgb(24,144,254)' } : 
    type === 'success'? { backgroundColor: 'rgba(0, 200, 81, 1)' } : 
    type === 'danger' ? { backgroundColor: 'rgba(255, 68, 68, 1)'}  : { backgroundColor: 'rgb(24,144,254)' }
    ]
  });
};

const styles = StyleSheet.create({
  toast: {
    marginTop: 60, 
    marginLeft: 25, 
    marginRight: 25, 
    borderRadius: 5
  },
  toastTitle: {
    fontWeight: '500', 
    paddingLeft: 10
  },
  btnStyle: {
    backgroundColor: '#fff'
  },
  dangertext: {
    color: 'red'
  },
  successText: {
    color: 'green'
  },
  warningText: {
    color: '#1890fe'
  }
});
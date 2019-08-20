import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  labelStyle: {
    fontSize: 18,
  },
  inputStyle: {
    marginTop: 5,
    height: 58,
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'grey',
  },
  authIcon: {
    width: 22,
    height: 22,
  },
  authTitle: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
    paddingLeft: 10,
  },
  borderView: {
    borderColor: '#A7B1BB',
    borderWidth: 0.5,
    marginTop: 80,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 100,
  },
  bottomBtn: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 20,
  },
  bottomIcon: {
    width: 22,
    height: 22,
  },
  bottomText: {
    fontSize: 14,
    paddingLeft: 10,
  },
});

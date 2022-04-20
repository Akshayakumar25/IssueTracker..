import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RegisterScreenStyles = StyleSheet.create({
  welcometext: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
  },
  textInput: {
    borderWidth: wp(0.3),
    borderColor: "#fca635",
    borderRadius: 10,
    margin: hp(1),
    marginTop: hp(3),
    width: wp(61),
    alignItems: 'center'
  },
  key: {
    borderWidth: 1,
    borderColor: "#dce0e6",
    borderRadius: 10,
    margin: hp(1),
    backgroundColor: '#dce0e6',
    marginTop: hp(3),
    width: wp(80),
    alignItems: 'center'
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    color: '#f5a11b',
    textAlign: 'center'

  },
  view: {
    margin: hp(5),
    alignSelf: 'center',
    width: wp(63)
  },
  logintext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0303',
    textAlign: 'center',
    marginTop: hp(2)

  },
  submit: {
    marginTop: hp(1),
    paddingTop: hp(1),
    paddingBottom: hp(2),
    backgroundColor: '#fca635',
    borderRadius: 10,
    borderWidth: wp(0.15),
    borderColor: '#fca635',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  alreadyText: {
    textAlign: "center",
    color: 'black',
    fontSize: 16
  },
  alignview: {
    alignSelf: 'center',
    marginTop: hp(5)
  },
  picker: {
    alignItems: 'center',
    marginBottom: hp(-3),
    marginTop: hp(-3),
    marginLeft: wp(5)

  }
});

export default RegisterScreenStyles;
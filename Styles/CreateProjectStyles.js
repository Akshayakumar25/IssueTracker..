import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CreateProjectStyles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    marginTop: hp(12)
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#dce0e6",
    borderRadius: 10,
    margin: hp(1),
    backgroundColor: '#dce0e6',
    marginTop: hp(2),
    width: wp(80),
    alignItems: 'center'
  },
  view: {
    marginTop: hp(5)
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
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: hp(3)
  },

});

export default CreateProjectStyles;
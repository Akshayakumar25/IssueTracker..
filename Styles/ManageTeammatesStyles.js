import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ManageTeammatesStyles = StyleSheet.create({
  view1: {
    marginBottom: hp(29)
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#dce0e6",
    borderRadius: 10,
    backgroundColor: '#dce0e6',
    width: wp(80),
    alignItems: 'center'
  },
  view: {
    marginTop: hp(5)
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: hp(3),
    marginTop: hp(2)
  },
  manageEmail: {
    alignSelf: 'center',
    marginTop: hp(4)
  },
  managee:
  {
    alignSelf: 'center',
  },
  margin: {
    margin: hp(1)
  },
  mainView: {
    backgroundColor: '#f2ac61',
    flex: 1
  },
  card: {
    marginTop: hp(1.5),
    alignSelf: 'center',
    height: hp(10),
    width: wp(95),
    borderRadius: 5,
    backgroundColor: '#f7cd99'
  },
  picture: {
    height: hp(4),
    width: wp(7),
    alignSelf: 'flex-end',
    margin: hp(1),
    borderRadius: 15
  },
  memberText: {
    marginLeft: wp(5),
    marginTop: hp(-2.5)
  },
  end: {
    alignItems: 'flex-end'
  }
});
export default ManageTeammatesStyles;
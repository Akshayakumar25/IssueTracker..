import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const AdminScreenStyles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#c9c7c5'
  },
  border1: {
    borderWidth: 1,
    borderColor: '#258bf7',
    borderRadius: 7,
    marginTop: hp(30),
    margin: hp(10)
  },
  border2: {
    borderWidth: 1,
    borderColor: '#258bf7',
    borderRadius: 7,
    marginTop: hp(1),
    margin: hp(10)
  },
  text: {
    padding: hp(1),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp(3),
    color: 'black'
  },
  view: {
    flexDirection: 'row',
    marginBottom: hp(1),
    alignSelf: 'center',

  },
  border: {
    borderWidth: hp(0.2),
    borderRadius: 7,
    margin: hp(3),
    width: wp(56),
    marginLeft: wp(1.8)
  },
  addButton6: {
    borderWidth: wp(0.3),
    height: hp(7.),
    width: wp(20),
    borderRadius: 10,
    borderColor: '#fca635',
    marginTop: hp(3),
    backgroundColor: '#fca635'

  },
  buttons: {
    color: 'white',
    fontSize: 20,
    marginTop: hp(1),
    marginLeft: wp(2)
  },
  squareBorder: {
    borderWidth: hp(0.2),
    height: hp(60),
    width: wp(80),
    alignSelf: 'center',
    margin: hp(1)
  },
  flatListView: {
    margin: hp(1),
    marginLeft: wp(5)
  },
  text1: {
    fontSize: hp(2.3),
    color: 'black'
  },
  buttonText: {
    textDecorationLine: 'underline',
    color: 'blue'
  },
  sqBorder: {
    // borderWidth: hp(0.2),
    height: hp(50),
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(17),
    backgroundColor: 'white'
  },
  memberText: {
    textAlign: 'center',
    color: 'black',
    fontSize: hp(2.8),
    margin: hp(2)
  },
  border4: {
    borderWidth: hp(0.2),
    borderRadius: 7,
    margin: hp(3),
    width: wp(70),
    alignSelf: 'center',
    borderColor: '#fca635'
  },
  flex: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: hp(2)
  },
  addButton: {
    // borderWidth: wp(0.3),
    // height: hp(7),
    width: wp(30),
    // margin: hp(1),
    borderRadius: 10,
    // borderColor: '#fca635',
  },
  addButton1: {
    // borderWidth: wp(0.3),
    // height: hp(7),
    width: wp(30),
    // margin: hp(1),
    borderRadius: 10,
    // borderColor: '#fca635',
    // backgroundColor: '#fca635'
  },
  button: {
    color: '#c9c7c5',
    fontSize: 20,
    textAlign: 'center',
    marginTop: hp(1)
  },
  button3: {
    color: '#fca635',
    fontSize: 20,
    marginTop: hp(1),
    textAlign: 'center'
  },
  modal2: {
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: hp(0.2),
    height: hp(40),
    width: wp(75),
    margin: hp(8.2),
    marginTop: hp(25),
    marginLeft: wp(16),
    backgroundColor: 'white',
  },
  textFlex: {
    flexDirection: 'row'
  },
  deleteText: {
    margin: hp(3),
    fontSize: hp(3),
    color: 'black'

  }

});

export default AdminScreenStyles;
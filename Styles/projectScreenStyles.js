import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const projectScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#c9c7c5'
    },
    mainview: {
        alignSelf: 'center',
    },
    view: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    addButton: {
        borderWidth: wp(0.3),
        height: hp(7.),
        width: wp(20),
        borderRadius: 10,
        borderColor: '#fca635',
        marginTop: hp(3),
        backgroundColor: '#fca635'

    },
    border: {
        borderWidth: hp(0.2),
        borderRadius: 7,
        margin: hp(3),
        width: wp(55),
        marginLeft: wp(-1)
    },
    button: {
        color: 'white',
        fontSize: 20,
        marginTop: hp(1),
        marginLeft: wp(2)
    },
    projectBorder: {
        borderWidth: hp(0.2),
        borderRadius: 10,
        width: wp(80),
        alignSelf: 'center',
        margin: hp(0.3),
        height: hp(20),
    },
    textView: {
        margin: hp(2),
        marginLeft: wp(10)
    },
    projectText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'

    },
    text: {
        color: 'black'
    },
    card: {
        borderWidth: hp(0.1),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        marginVertical: hp(10),
        marginHorizontal: wp(5),
        padding: hp(4),
        width: wp(90),
        height: hp(80)

    },
    crossPicture: {
        height: hp(5),
        width: wp(10),
        alignSelf: 'flex-end',

    },
    card1: {
        marginTop: hp(10),
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp(80),
        height: hp(75)


    },
    border1: {
        borderWidth: hp(0.2),
        borderRadius: 7,
        margin: hp(1),
        width: wp(60),
        alignSelf: 'center',
        borderColor: '#fca635'
    },
    selectText: {
        textAlign: 'center'
    },
    squareBorder: {
        borderWidth: hp(0.2),
        height: hp(40),
        width: wp(60),
        alignSelf: 'center',
        margin: hp(1)
    },
    submit: {
        marginTop: hp(2),
        padding: hp(2),
        // backgroundColor: '#fca635',
        // borderRadius: 10,
        // borderWidth: wp(0.15),
        // borderColor: '#fca635',
        // paddingEnd: wp(5),
        // paddingRight: wp(5)
    },
    submitText: {
        color: '#fca635',
        textAlign: 'center',
        fontSize: 18,
        // width: wp(30)
    },
    closeText: {
        color: '#696969',
        textAlign: 'center',
        fontSize: 18,
        // width: wp(30)
    },
    flex: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "space-between",
        margin: hp(1)
    },
    bottomView: {
        marginBottom: hp(3)
    },
    addText: {
        textAlign: 'center',
        fontSize: hp(2.5),
        color: 'black'
    },
    card: {
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});

export default projectScreenStyles;
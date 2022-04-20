import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const listProjectStyles = StyleSheet.create({
    secondModalView: {
        backgroundColor: 'black',
        marginTop: hp(10),
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp(80),
        height: hp(70)

    },
    create: {
        textAlign: 'center',
        fontSize: hp(3),
        color: 'black',
        margin: hp(0.5)
    },
    flex: {
        flexDirection: 'row',
        margin: hp(3),
        justifyContent: 'space-between',

    },
    projectText: {
        fontSize: hp(4),
        fontWeight: 'bold',
        color: '#fca635'
    },
    button: {
        marginTop: hp(1),
        fontSize: hp(2.5),
        color: 'white',
        margin: hp(1)
    },
    border1: {
        borderWidth: hp(0.2),
        borderRadius: 10,
        borderColor: '#fca635',
        backgroundColor: '#fca635'
    },
    border: {
        borderWidth: hp(0.2),
        borderRadius: 7,
        margin: hp(2),
        width: wp(65),
        height: hp(7),
        marginLeft: wp(7)
    },
    align: {
        // width: wp(10)
        marginLeft: wp(-30)
    },
    picker: {
        marginRight: wp(-35),
        borderWidth: hp(0.2),
        height: hp(5),
        width: wp(20),

    },
    textInput: {
        borderWidth: wp(0.3),
        borderColor: "#fca635",
        borderRadius: 10,
        margin: hp(1),
        marginTop: hp(3),
        width: wp(20),
        alignItems: 'center',
        // color: 'white'
    },
    textFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    border2: {
        alignSelf: 'center',
        borderWidth: hp(0.2),
        margin: hp(2),
        borderRadius: 10,
        width: wp(75),
        display: 'flex',
        marginBottom: hp(5)
    },
    content: {
        textAlign: 'center',
        margin: hp(2)
    },
    text1: {
        margin: hp(3),
        fontSize: hp(2.3),
    },
    text2: {
        margin: hp(3),
        fontSize: hp(2.5),
        color: 'black'
    },
    opacity: {
        margin: hp(3)
    },
    topView: {
        marginBottom: hp(10),
        backgroundColor: '#c9c7c5'
    },
    card1: {
        marginTop: hp(10),
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        width: wp(80),
        height: hp(68)
    },
    selectText: {
        textAlign: 'center'
    },
    squareBorder: {
        borderWidth: hp(0.2),
        height: hp(30),
        width: wp(70),
        alignSelf: 'center',
        margin: hp(1)
    },
    crossPicture: {
        height: hp(5),
        width: wp(10),
        alignSelf: 'flex-end',
        margin: hp(2)

    },
    border3: {
        borderWidth: hp(0.2),
        borderRadius: 7,
        margin: hp(0.5),
        width: wp(60),
        alignSelf: 'center',
        borderColor: '#fca635'
    },
    sqborder: {
        borderWidth: hp(0.2),
        height: hp(30),
        width: wp(60),
        alignSelf: 'center',
        margin: hp(1),
        borderColor: '#fca635'
    },
    pickerBorder: {
        borderWidth: hp(0.2),
        width: wp(60),
        alignSelf: 'center',
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635'
    },
    view: {
        flexDirection: 'row',
        marginBottom: hp(1),
        alignSelf: 'center',
    },
    submit: {
        marginTop: hp(1),
        padding: hp(2),
        borderRadius: 10,
        paddingEnd: wp(5),
        paddingRight: wp(5)
    },
    submitText: {
        color: '#fca635',
        textAlign: 'center',
        fontSize: 18,
    },
    closeButton: {
        color: '#696969',
        textAlign: 'center',
        fontSize: 18,
        marginLeft: wp(3)
    },
    editText: {
        textAlign: 'center',
        fontSize: hp(3),
        color: 'black',
        marginTop: hp(4)

    },
    border7: {
        marginTop: hp(2),
        borderWidth: hp(0.2),
        borderRadius: 7,
        margin: hp(1),
        width: wp(60),
        alignSelf: 'center',
        borderColor: '#fca635',
        height: hp(8)
    },
    sqrborder: {
        borderWidth: hp(0.2),
        height: hp(20),
        width: wp(60),
        alignSelf: 'center',
        margin: hp(1),
        borderColor: '#fca635'
    },
    pickerBorderr: {
        borderWidth: hp(0.2),
        width: wp(60),
        alignSelf: 'center',
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635',
        height: hp(8)
    },
    flexx: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: hp(3),
    },
    addButtonn: {
        borderWidth: wp(0.3),
        height: hp(7),
        width: wp(30),
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635',

    },
    buttonn: {
        color: '#fca635',
        fontSize: 20,
        textAlign: 'center',
        marginTop: hp(1)

    },
    button33: {
        color: '#fca635',
        fontSize: 20,
        // marginTop: hp(1),
        textAlign: 'center'
    },
    addButton11: {
        borderWidth: wp(0.3),
        height: hp(7),
        width: wp(30),
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635',
        backgroundColor: '#fca635'

    },
    flex11: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: hp(1),
    },
    addButtonnn: {
        // borderWidth: wp(0.3),
        height: hp(7),
        width: wp(30),
        margin: hp(1),
        borderRadius: 10,

    },
    bbutton: {
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',

    },

    addButton111: {
        height: hp(7),
        width: wp(30),
        margin: hp(1),


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
    moreText: {
        alignSelf: 'center',
        marginTop: hp(1.4)
    }



});

export default listProjectStyles;
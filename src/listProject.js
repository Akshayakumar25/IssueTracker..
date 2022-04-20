import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, Modal, Image, Button } from 'react-native';
import listProjectStyles from '../Styles/listProjectStyles';
import { Picker } from '@react-native-picker/picker';
import editIssue from './editIssue';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const list = (props) => {
    // const handleProjectList = () => {
    //     props.navigation.navigate('editIssue');
    // };
    const [items] = React.useState([
        { project: 'issue1', num1: '#231', num2: 'this is the  nxbckzxbc   xnb c bzxk n bbxz xzxnb  z x cbcnkzxnbn bxmn z mz', dev: 'Kiran' },
        { project: 'issue2', num1: '#232', num2: 'this is the issue2', dev: 'Akshay' },
        { project: 'issue3', num1: '#233', num2: 'this is the issue3', dev: 'Sagar' },
        { project: 'issue4', num1: '#234', num2: 'this is the issue4', dev: 'Sandeep' },
        { project: 'issue5', num1: '#235', num2: 'this is the issue5', dev: 'Satisha' },
        { project: 'issue6', num1: '#236', num2: 'this is the issue6', dev: 'Akshay' }
    ]);
    const [pickerValue, setPickerValue] = useState('');
    const [modal, setModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    const [pickerData, setPickerData] = useState([]);
    const [moreButton, setMoreButton] = useState(false)

    useEffect(() => {
        devName();
    }, [])


    const handleAddNewIssue = () => {
        setModal(true)
    }

    const handleCrossButton = () => {
        setModal(false)
    }

    const devName = () => {
        const getData = firestore().collection("Projects")
            .doc("HCURA")
            .collection("members")
            .get()
            .then(snap => {
                let data = []
                snap.forEach(doc => {
                    data.push(doc.data().name)
                    console.log("Hello>>>", doc.data().name);
                });
                setPickerData(data);
            }).catch(error => {
                console.log(error)

            })
    }

    const picker = () => {
        return (
            <Picker selectedValue={pickerValue}
                onValueChange={(itemValue) => setPickerValue(itemValue)}>
                {pickerData.map((x) => { return <Picker.Item label={x} value={x} /> })}
            </Picker>
        );
    }
    return (
        <View style={listProjectStyles.topView}>
            <Modal visible={modal} transparent={true}>
                <View>
                    <View style={listProjectStyles.card1}>
                        <Text style={listProjectStyles.create}>Create new issue</Text>
                        <View style={listProjectStyles.border3}>
                            <TextInput placeholder="Hey"></TextInput>
                        </View>
                        <View style={listProjectStyles.sqborder}>
                            <TextInput placeholder="Discription"></TextInput>
                        </View>
                        <View style={listProjectStyles.pickerBorder}>
                            <Picker selectedValue={pickerValue}
                                onValueChange={(itemValue) => setPickerValue(itemValue)}>
                                <Picker.Item label="Assing issue" />
                                <Picker.Item label="User" value="User" />
                                <Picker.Item label="Tester" value="Tester" />
                                <Picker.Item label="Admin" value="Admin" />
                            </Picker>
                        </View>
                        <View style={listProjectStyles.view}>
                            <TouchableOpacity style={listProjectStyles.submit} onPress={() => setModal(false)}>
                                <Text style={listProjectStyles.closeButton}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={listProjectStyles.submit}>
                                <Text style={listProjectStyles.submitText}>Add issue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal visible={secondModal} transparent={true}>
                <View style={listProjectStyles.secondModalView}>
                    <Text style={listProjectStyles.editText}>Edit issue</Text>
                    <View style={listProjectStyles.border7}>
                        <TextInput placeholder="Hey"></TextInput>
                    </View>
                    <View style={listProjectStyles.sqrborder}>
                        <TextInput placeholder="Discription"></TextInput>
                    </View>
                    <View style={listProjectStyles.pickerBorderr}>
                        <Picker selectedValue={pickerValue}
                            onValueChange={(itemValue) => setPickerValue(itemValue)}>
                            <Picker.Item label="Sagar" />
                            <Picker.Item label="Close" value="Close" />
                            <Picker.Item label="Completed" value="Completed" />
                        </Picker>
                    </View>
                    <View style={listProjectStyles.pickerBorderr}>
                        {picker()}
                    </View>
                    <View style={listProjectStyles.flex11}>
                        <TouchableOpacity style={listProjectStyles.addButtonnn} onPress={() => setSecondModal(false)}>
                            <Text style={listProjectStyles.bbutton}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={listProjectStyles.addButton111}>
                            <Text style={listProjectStyles.button33}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal visible={moreButton} transparent={true}>
                <View style={listProjectStyles.modal2}>
                    <TouchableOpacity style={{ borderWidth: hp(0.15), margin: hp(2), borderRadius: hp(2) }}>
                        <Text style={{ margin: hp(2) }}>View Team</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: hp(0.15), margin: hp(2), borderRadius: hp(2) }}>
                        <Text style={{ margin: hp(2) }}>Delete Project</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: hp(0.15), margin: hp(2), borderRadius: hp(2) }}>
                        <Text style={{ margin: hp(2) }}>Edit Project Name</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            <View style={listProjectStyles.flex}>
                <Text style={listProjectStyles.projectText}>HCURA</Text>
                <TouchableOpacity style={listProjectStyles.border1} onPress={() => handleAddNewIssue()}>
                    <Text style={listProjectStyles.button}>+Add new issue</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={listProjectStyles.border}>
                    <TextInput placeholder='Search issue'></TextInput>
                </View>
                <View style={{ borderWidth: hp(0.2), height: hp(7), marginTop: hp(2), width: wp(15) }}>
                    <TouchableOpacity onPress={() => setMoreButton(true)}>
                        <Text style={listProjectStyles.moreText}>More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={listProjectStyles.border2} onPress={() => setSecondModal(true)}>
                            <View style={listProjectStyles.textFlex}>
                                <Text style={listProjectStyles.text2}>{item.project}</Text>
                                <Text style={listProjectStyles.text1}>{item.num1}</Text>
                            </View>
                            <View>
                                <Text style={listProjectStyles.opacity}>{item.dev}</Text>
                            </View>
                            <View>
                                <Text style={listProjectStyles.content}>{item.num2}</Text>
                            </View>
                            <TouchableOpacity style={listProjectStyles.opacity}>
                                <Text>completed</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View >
    )
};

const listProject = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="list" component={list} options={{ header: () => null }} />
                <Stack.Screen name="editIssue" component={editIssue} options={{ header: () => null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default listProject;
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import editIssueStyles from '../Styles/editIssueStyles';
import { Picker } from '@react-native-picker/picker';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';


const editIssue = () => {
    const [pickerValue, setPickerValue] = useState('')

    useEffect(() => {
        const subscriber = firestore()
            .collection('Member')
            .onSnapshot(querySnapshot => {
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setUsers(users);
            });
    }, []);

    const data = () => {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    }


    return (
        <View>
            <Text style={editIssueStyles.editText}>Edit issue</Text>
            <View style={editIssueStyles.border3}>
                <TextInput placeholder="Hey"></TextInput>
            </View>
            <View style={editIssueStyles.sqborder}>
                <TextInput placeholder="Discription"></TextInput>
            </View>
            <View style={editIssueStyles.pickerBorder}>
                {data()}
            </View>
            <View style={editIssueStyles.pickerBorder}>
                <Picker selectedValue={pickerValue}
                    onValueChange={(itemValue) => setPickerValue(itemValue)}>
                    <Picker.Item label="Sagar" />
                    <Picker.Item label="Close" value="Close" />
                    <Picker.Item label="Completed" value="Completed" />
                </Picker>
            </View>
            <View style={editIssueStyles.flex}>
                <TouchableOpacity style={editIssueStyles.addButton}>
                    <Text style={editIssueStyles.button}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={editIssueStyles.addButton1}>
                    <Text style={editIssueStyles.button3}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default editIssue;
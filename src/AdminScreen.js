// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ManageTeammates from './ManageTeammates';
// import ManageProject from './ManageProject';
// import AdminScreenStyles from '../Styles/AdminScreenStyles';
// import allStrings from '../string/allString';


// const ScreenOne = (props) => {
//   const manageTeammates = () => {
//     props.navigation.navigate('ManageTeammates');
//   };
//   const manageProject = () => {
//     props.navigation.navigate('ManageProject');
//   };

//   return (
//     <View>
//       <View style={AdminScreenStyles.border1}>
//         <TouchableOpacity onPress={() => manageTeammates()}>
//           <Text style={AdminScreenStyles.text}>{allStrings.inputPlaceholder.manageTeammates}</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={AdminScreenStyles.border2}>
//         <TouchableOpacity onPress={manageProject}>
//           <Text style={AdminScreenStyles.text}>{allStrings.inputPlaceholder.manageTask}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const AdminScreen = () => {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator>
//         <Stack.Screen name=" " component={ScreenOne} options={{ header: () => null }} />
//         <Stack.Screen name="ManageTeammates" component={ManageTeammates} options={{ header: () => null }} />
//         <Stack.Screen name="ManageProject" component={ManageProject} options={{ header: () => null }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



// export default AdminScreen;


import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast';
import AdminScreenStyles from '../Styles/AdminScreenStyles';

const AdminScreen = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const [memberName, setMemberName] = useState('');
  const [users, setUsers] = useState('');
  const [loading, setLoading] = useState(true);
  const [memberEmail, setMemberEmail] = useState('');
  const [id, setId] = useState('');


  const handleAddButton = () => {
    setAddModal(true)
  }
  const handleDeleteButton = (docId) => {
    setDeleteModal(true)
    setId(docId)
  }


  const addMember = async () => {
    if (memberEmail && memberName) {
      const add = await firestore()
        .collection('Member')
        .add({
          MemberEmail: memberEmail,
          MemberName: memberName
        });
      toastMessage1();
      setAddModal(false);
      setMemberEmail('');
      setMemberName('');
      if (add && add._documentPath && add._documentPath.id) {
        await firestore().collection('Member').doc(add._documentPath.id).update({
          documentId: add._documentPath.id
        })
      }
    } else {
      Alert.alert('Please Enter all fields')
    }
  }


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

  const handleDelete = async () => {
    const EreseData = await firestore()
      .collection('Member')
      .doc(id)
      .delete()
    ToastMessage2()
    setDeleteModal(false)
  }

  const toastMessage1 = () => {
    Toast.show("Added a New Member Successfully")
  }

  const ToastMessage2 = () => {
    Toast.show("Removed A Member Successfully")
  }



  return (
    <View style={AdminScreenStyles.topView}>
      <Modal visible={addModal} transparent={true}>
        <View style={AdminScreenStyles.sqBorder}>
          <Text style={AdminScreenStyles.memberText}>Add Member</Text>
          <View style={AdminScreenStyles.border4}>
            <TextInput
              placeholder='Member Name'
              value={memberName}
              onChangeText={(value) => setMemberName(value)}
            ></TextInput>
          </View>
          <View style={AdminScreenStyles.border4}>
            <TextInput
              placeholder='Member Email'
              value={memberEmail}
              onChangeText={(value) => setMemberEmail(value)}></TextInput>
          </View>
          <View style={AdminScreenStyles.flex}>
            <TouchableOpacity style={AdminScreenStyles.addButton} onPress={() => setAddModal(false)}>
              <Text style={AdminScreenStyles.button}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AdminScreenStyles.addButton1} onPress={() => addMember()}>
              <Text style={AdminScreenStyles.button3}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={deleteModal} transparent={true}>
        <View style={AdminScreenStyles.modal2}>
          <Text style={AdminScreenStyles.deleteText}>Delete Member</Text>
          <Text>Do you want to delete </Text>
          <View style={AdminScreenStyles.textFlex}>
            <Text></Text>
            <Text>this member</Text>
            <Text> Sagar?</Text>
          </View>
          <View style={AdminScreenStyles.flex}>
            <TouchableOpacity style={AdminScreenStyles.addButton} onPress={() => setDeleteModal(false)}>
              <Text style={AdminScreenStyles.button}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AdminScreenStyles.addButton1} onPress={() => handleDelete()}>
              <Text style={AdminScreenStyles.button3}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={AdminScreenStyles.view}>
        <View style={AdminScreenStyles.border}>
          <TextInput placeholder="Hello"></TextInput>
        </View>
        <TouchableOpacity onPress={() => setAddModal(true)} style={AdminScreenStyles.addButton6}>
          <Text style={AdminScreenStyles.buttons}>+Add</Text>
        </TouchableOpacity>
      </View>
      <View style={AdminScreenStyles.squareBorder}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={AdminScreenStyles.flatListView}>
              <Text style={AdminScreenStyles.text1}>{item.MemberName}</Text>
              <Text>{item.MemberEmail}</Text>
              <View>
                <TouchableOpacity onPress={() => handleDeleteButton(item.documentId)}>
                  <Text style={AdminScreenStyles.buttonText}>Delete member</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
export default AdminScreen;



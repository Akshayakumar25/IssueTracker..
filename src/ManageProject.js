import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeleteProject from './DeleteProject';
import EditProject from './EditProject';
import CreateProject from './CreateProject';
import ManageProjectStyles from '../Styles/ManageProjectStyles';
import allStrings from '../string/allString';

const Screen = (props) => {
  const create = () => {
    props.navigation.navigate('Createproject');
  };
  const editproject = () => {
    props.navigation.navigate('editproject');
  };
  const deleteproject = () => {
    props.navigation.navigate('deleteproject');
  };
  return (
    <View>
      <View style={ManageProjectStyles.border1}>
        <TouchableOpacity onPress={create}>
          <Text style={ManageProjectStyles.text}>{allStrings.inputPlaceholder.CreateTask1}</Text>
        </TouchableOpacity>
      </View>
      <View style={ManageProjectStyles.border2}>
        <TouchableOpacity onPress={editproject}>
          <Text style={ManageProjectStyles.text}>{allStrings.inputPlaceholder.editTask}</Text>
        </TouchableOpacity>
      </View>
      <View style={ManageProjectStyles.border2}>
        <TouchableOpacity onPress={deleteproject}>
          <Text style={ManageProjectStyles.text}>{allStrings.inputPlaceholder.deleteTask}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const ManageProject = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Screen" component={Screen} options={{ header: () => null }} />
        <Stack.Screen name="Createproject" component={CreateProject} options={{ header: () => null }} />
        <Stack.Screen name="editproject" component={EditProject} options={{ header: () => null }} />
        <Stack.Screen name="deleteproject" component={DeleteProject} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ManageProject;
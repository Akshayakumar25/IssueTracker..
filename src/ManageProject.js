import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DeleteProject from './DeleteProject';
import EditProject from './EditProject';
import CreateProject from './CreateProject';
import ManageProjectStyles from '../Styles/ManageProjectStyles';

const Screen = (props) => {
    const createproject = () => {
      props.navigation.navigate('createproject');
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
                <TouchableOpacity onPress={createproject}>
                <Text style={ManageProjectStyles.text}>Create New Task</Text>
                </TouchableOpacity>
          </View>
          <View style={ManageProjectStyles.border2}>
                <TouchableOpacity onPress={editproject}>
                    <Text style={ManageProjectStyles.text}>Edit Task</Text>
                </TouchableOpacity>
          </View>
          <View style={ManageProjectStyles.border2}>
                <TouchableOpacity onPress={deleteproject}>
                    <Text style={ManageProjectStyles.text}>Delete Task</Text>
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
            <Stack.Screen name="Screen" component={Screen} options={{header: () => null}} />
            <Stack.Screen name="createproject" component={CreateProject} options={{header: () => null}} />
            <Stack.Screen name="editproject" component={EditProject} options={{header: () => null}}/>
            <Stack.Screen name="deleteproject" component={DeleteProject} options={{header: () => null}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    };

export default ManageProject;
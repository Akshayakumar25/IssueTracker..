import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateProject from './CreateProject';
import ManageTeammates from './ManageTeammates';
import ManageProject from './ManageProject';
import AdminScreenStyles from '../Styles/AdminScreenStyles';


const ScreenOne = (props) => {
  const manageTeammates = () => {
    props.navigation.navigate('ManageTeammates');
  };
  const  manageProject = () => {
    props.navigation.navigate('ManageProject');
  };

  return (
    <View>
      <View style={AdminScreenStyles.border1}>
        <TouchableOpacity onPress={manageTeammates}>
          <Text style={AdminScreenStyles.text}>Manage Teammates</Text>
        </TouchableOpacity>
      </View>
        <View style={AdminScreenStyles.border2}>
           <TouchableOpacity onPress={manageProject}>
             <Text style={AdminScreenStyles.text}>Manage Tasks</Text>
           </TouchableOpacity>
        </View>
    </View>
  );
};

const AdminScreen = () => {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name=" " component={ScreenOne}  options={{header: () => null}}/>
        <Stack.Screen name="ManageTeammates" component={ManageTeammates} options={{header: () => null}} />
        <Stack.Screen name="ManageProject" component={ManageProject} options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default AdminScreen;



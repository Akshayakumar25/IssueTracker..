import React from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import ManageTeammatesStyles from '../Styles/ManageTeammatesStyles';


const toast1 = () =>{
  Toast.show("Added a New Member Successfully")
}

const toast2 = () =>{
  Toast.show("Removed A Member Successfully")
}

const ManageTeammates = () => {
    return (
      <View>
         <View>
          <Text style={ManageTeammatesStyles.text}>Manage Teammates</Text>
         </View>
         <View style={ManageTeammatesStyles.manageEmail}>
           <View style={ManageTeammatesStyles.textInput}>
               <TextInput placeholder='Enter a Member Email id'></TextInput>
           </View>
           <View style={ManageTeammatesStyles.view}>
               <Button title="Add Member" color='#FF0303' onPress={toast1}/>
           </View>
          </View>
         <View style={ManageTeammatesStyles.managee}>
           <View style={ManageTeammatesStyles.textInput}>
               <TextInput placeholder='Enter a Member Email id'></TextInput>
           </View>
           <View style={ManageTeammatesStyles.view}>
               <Button title="Remove Member" color='#FF0303' onPress={toast2}/>
           </View>
         </View>
       </View>
    );
  };

  export default ManageTeammates;
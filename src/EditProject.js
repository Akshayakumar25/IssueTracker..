import React, {useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,FlatList,Image} from 'react-native';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edit from './Edit';
import EditProjectStyles from '../Styles/EditProjectStyles';
import firestore from '@react-native-firebase/firestore';
import allStrings from '../string/allString';


const EditP = (props) => {
  const navigation = useNavigation();
  const navigateToEditScreen = (item) => {
    props.navigation.navigate('Edit',{data:item});
  };

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const[data,setData] = useState(true)
  
    useEffect(() => {
      const subscriber = firestore()
        .collection('CreateTask')
        .onSnapshot(querySnapshot => {
          const users = [];
          querySnapshot.forEach(documentSnapshot => {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
          setUsers(users);
          setLoading(false);
        });
    }, []);
    
  return (
    <View>
        <FlatList
          data={users}
          renderItem={({item})=>(
            <View style={EditProjectStyles.card}>
              <View style={EditProjectStyles.commonMargin}>
                  <TouchableOpacity onPress={()=>navigateToEditScreen(item)}>
                    <Image style={EditProjectStyles.picture} source={require('../../incognito/assets/edit.png')}/>
                  </TouchableOpacity>
                  <Text style={EditProjectStyles.commonMargin}>{allStrings.inputPlaceholder.taskName}{item.taskname}</Text>
                  <Text style={EditProjectStyles.commonMargin}>{allStrings.inputPlaceholder.jiraNumber}{item.jiraNumber}</Text>
                  <Text style={EditProjectStyles.commonMargin}>{allStrings.inputPlaceholder.developerEmail}{item.developerEmail}</Text>
                  <Text style={EditProjectStyles.commonMargin}>{allStrings.inputPlaceholder.developerName}{item.developerName}</Text>
                  <Text style={EditProjectStyles.commonMargin}>{allStrings.inputPlaceholder.taskDiscription}{item.taskDiscription}</Text>
                  <Text style={EditProjectStyles.commonMargin}>{allStrings.inputPlaceholder.documentId}{item.documentId}</Text>
              </View>
            </View>
          )}
        />
    </View>
  );
};


const EditProject = () => {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name=" " component={EditP}  options={{header: () => null}}/>
          <Stack.Screen name="Edit" component={Edit} options={{header: () => null}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default EditProject;
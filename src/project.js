// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity, FlatList } from 'react-native';
// import IssueListScreenStyles from '../Styles/IssueListScreenStyles';
// import firestore from '@react-native-firebase/firestore';
// import allStrings from '../string/allString';
// import Toast from 'react-native-simple-toast';

// const IssueListScreen = () => {
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState([]);
//   const [data, setData] = useState(false);
//   const [text, setText] = useState(null);

//   const toastMessege = () => {
//     Toast.show("Updated Task Status Successfully")
//   }


//   useEffect(() => {
//     const subscriber = firestore()
//       .collection('CreateTask')
//       .onSnapshot(querySnapshot => {
//         const users = [];
//         querySnapshot.forEach(documentSnapshot => {
//           users.push({
//             ...documentSnapshot.data(),
//             key: documentSnapshot.id,
//           });
//         });
//         setUsers(users);
//         setLoading(false);
//       });
//   }, []);

//   const handleTaskStatus = (item) => {
//     if (text == null) {
//       setText('Completed')
//     } else if (text == 'Completed') {
//       setText('Reopened')
//     } else if (text == 'Reopened') {
//       setText('Completed')
//     }
//     updateTaskStatus(item);
//   }

//   const updateTaskStatus = async (item) => {
//     const taskData = await firestore()
//       .collection('CreateTask')
//       .doc(item)
//       .update({
//         Taskstatus: text
//       })
//     toastMessege();
//   }

//   return (
//     <View style={IssueListScreenStyles.mainView}>
//       <Text style={IssueListScreenStyles.text}>{allStrings.inputPlaceholder.issue}</Text>
//       <View>
//         <FlatList
//           data={users}
//           renderItem={({ item }) => (
//             <View style={IssueListScreenStyles.card}>
//               <View>
//                 <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.taskName}{item.taskname}</Text>
//                 <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.jiraNumber}{item.jiraNumber}</Text>
//                 <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.developerEmail}{item.developerEmail}</Text>
//                 <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.developerName}{item.developerName}</Text>
//                 <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.taskDiscription}{item.taskDiscription}</Text>
//                 <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.documentId}{item.documentId}</Text>
//                 <View style={IssueListScreenStyles.flexStyle}>
//                   <TouchableOpacity style={IssueListScreenStyles.button2} onPress={() => handleTaskStatus(item.documentId)}>
//                     <Text style={IssueListScreenStyles.padding}>{allStrings.inputPlaceholder.updateTaskStatusButtonText}</Text>
//                   </TouchableOpacity>
//                   <Text style={IssueListScreenStyles.statusText}>{item.Taskstatus}</Text>
//                 </View>
//               </View>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   )
// }

// export default IssueListScreen;


import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import allStrings from '../string/allString';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import projectScreenStyles from '../Styles/projectScreenStyles';
import listProject from './listProject';
// import { Card } from 'react-native-paper';
// import { CheckBox } from '@react-native-community/checkbox';
import { Checkbox } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';


const projects = (props) => {
  const handleProjectList = () => {
    props.navigation.navigate('listProject');
  };
  const [products, setProducts] = useState('');
  const [modal, setModal] = useState(false)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [checked, setChecked] = useState(false);
  const [users, setUsers] = useState('');
  const [member, setMember] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [fetctProject, setfetchProjects] = useState('')

  const handleAddButton = () => {
    setModal(true);
  }

  const handleCrossButton = () => {
    setModal(false)
  }

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  const onClickCheckBox = () => {
    setChecked(!checked)

  }

  const createProject = async () => {
    console.log("Hello")
    await firestore()
      .collection('Projects')
      .doc(projectName).set({
        project_name: projectName,
        TotalIssues: 0,
        PendingIssue: 0
      })
    const taskData = await firestore()
      .collection('Projects')
      .doc(projectName)
      .collection('members')
      .add({
        ProjectName: projectName,
        Members: member
      });
    console.log('kkk', taskData)
    if (taskData && taskData._documentPath && taskData._documentPath.id) {
      await firestore().collection('CreateTask').doc(taskData._documentPath.id).update({
        documentId: taskData._documentPath.id
      })
    }
  }


  useEffect(() => {
    subscriber();
    fetchProjects();

  }, []);

  const addMember = (id) => {
    setMember([...member, id])
  }

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

  const fetchProjects = () => {
    const projects = firestore().collection('Projects')
    console.log("EVENTS", projects)
    projects.get().then((querySnapshot) => {
      const projectNames = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      console.log("<<>>", projectNames)
      setfetchProjects(projectNames)
    })
  }


  return (
    <View style={projectScreenStyles.main}>
      <Modal visible={modal} transparent={true}>
        <View>
          <View style={projectScreenStyles.card1}>
            <Text style={projectScreenStyles.addText}>Add Project</Text>
            <View style={projectScreenStyles.border1}>
              <TextInput
                placeholder={allStrings.inputPlaceholder.projectName}
                value={projectName}
                onChangeText={(value) => setProjectName(value)}>
              </TextInput>
            </View>
            <Text style={projectScreenStyles.selectText}>{allStrings.inputPlaceholder.select}</Text>
            <View style={projectScreenStyles.squareBorder}>
              <FlatList
                data={users}
                renderItem={({ item }) => (
                  <View style={projectScreenStyles.card}>
                    <View
                      style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }}>
                      <Text>{item.MemberName}</Text>
                      <TouchableOpacity onPress={() => addMember(item.MemberName)}>
                        <Text>+Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={projectScreenStyles.view}>
              <TouchableOpacity
                style={projectScreenStyles.submit} onPress={() => setModal(false)}>
                <Text style={projectScreenStyles.closeText}>{allStrings.inputPlaceholder.close}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={projectScreenStyles.submit}
                onPress={() => createProject()}>
                <Text style={projectScreenStyles.submitText}>{allStrings.inputPlaceholder.addProject}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={projectScreenStyles.view}>
        <View style={projectScreenStyles.border}>
          <TextInput placeholder={allStrings.inputPlaceholder.search}></TextInput>
        </View>
        <TouchableOpacity onPress={() => handleAddButton()} style={projectScreenStyles.addButton}>
          <Text style={projectScreenStyles.button}>{allStrings.inputPlaceholder.add}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={fetctProject}
          renderItem={({ item }) => (
            <View style={projectScreenStyles.bottomView}>
              <TouchableOpacity style={projectScreenStyles.projectBorder} onPress={() => handleProjectList()}>
                <View style={projectScreenStyles.textView}>
                  <Text style={projectScreenStyles.projectText}>{item.project_name}</Text>
                  <Text></Text>
                  <Text style={projectScreenStyles.text}>{allStrings.inputPlaceholder.totalIssue}{item.TotalIssues}</Text>
                  <Text></Text>
                  <Text style={projectScreenStyles.text}>{allStrings.inputPlaceholder.Pending}{item.PendingIssue}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  )
};

const project = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="project" component={projects} options={{ header: () => null }} />
        <Stack.Screen name="listProject" component={listProject} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default project;


                      // <Checkbox
                      //   status={checked ? 'checked' : 'unchecked'}
                      //   onPress={() => onClickCheckBox()}
                      //   color={'green'}
                      // />
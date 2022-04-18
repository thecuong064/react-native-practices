import React from 'react';
import Task from './Task';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
  SectionList,
} from 'react-native';

const ItemSeparator = () => <View style={styles.itemSeparator} />;

function TodoList({navigation}) {
  const [newTask, setNewTask] = React.useState(null);
  const [tasksList, setTasksList] = React.useState([]);
  const [completedTaskList, setCompletedTasksList] = React.useState([]);

  React.useEffect(() => {
    //navigation.setOptions({title: `Task count: ${tasksList?.length}`});
    console.log('title updated');
  }, [tasksList]);

  const addTask = newTaskTitle => {
    Keyboard.dismiss();

    if (newTaskTitle && newTaskTitle.trim()) {
      var newIndex = 0;
      if (tasksList.length > 0) {
        newIndex = tasksList[tasksList.length - 1].index + 1;
      }

      var newTask = {
        index: newIndex,
        title: newTaskTitle.trim(),
      };

      setTasksList([...tasksList, newTask]);
    }

    // clear text input
    setNewTask(null);
  };

  const completeTask = selectedTask => {
    var copiedArray = [...tasksList]; // make a separate copy of the array
    var index = copiedArray.indexOf(selectedTask);
    if (index !== -1) {
      copiedArray.splice(index, 1);
      setTasksList([...copiedArray]);
      setCompletedTasksList([...completedTaskList, selectedTask]);
    } else {
      uncompleteTask(selectedTask);
    }
  };

  const uncompleteTask = selectedTask => {
    var copiedArray = [...completedTaskList]; // make a separate copy of the array
    var index = copiedArray.indexOf(selectedTask);
    if (index !== -1) {
      copiedArray.splice(index, 1);
      setCompletedTasksList([...copiedArray]);
      setTasksList([...tasksList, selectedTask]);
    }
  };

  const renderItem = ({item}) => (
    <Task text={item.title} onPress={() => completeTask(item)} />
  );

  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.header}>Tasks count: {tasksList.length}</Text>

        {/* <FlatList
          data={tasksList}
          renderItem={renderItem}
          keyExtractor={item => item.index}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        /> */}

        <SectionList
          sections={[
            {title: 'Tasks', data: tasksList},
            {title: 'Completed', data: completedTaskList},
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.taskInputWrapper}>
        <TextInput
          style={styles.taskTextInput}
          placeholder={'Write a task'}
          value={newTask}
          onChangeText={text => setNewTask(text)}
        />
        <TouchableOpacity onPress={() => addTask(newTask)}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  tasks: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  sectionHeader: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  taskInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  taskTextInput: {
    padding: 10,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginRight: 15,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
  },
  addButtonText: {
    color: '#C0C0C0',
    fontSize: 30,
  },
  taskWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 20,
  },
  itemSeparator: {
    height: 20,
  },
  taskLeftBox: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    borderRadius: 5,
  },
  taskRightBox: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#55BCF6',
  },
});

export default TodoList;

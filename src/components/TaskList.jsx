import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TaskList = ({
    tasks,
    taskInput,
    setTaskInput,
    handleTaskSubmit,
    handleDeleteTask,
    handleTaskCompletion
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese una nueva tarea"
                value={taskInput}
                onChangeText={setTaskInput}
                onSubmitEditing={handleTaskSubmit}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleTaskSubmit}>
                <Text style={styles.addButtonText}>Agregar Tarea</Text>
            </TouchableOpacity>

            <FlatList
                data={tasks}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.taskItem}>
                        <Text style={[styles.taskText, item.completed && styles.completedText]}>
                            {item.text}
                        </Text>
                        <View style={styles.itemControls}>
                            <TouchableOpacity onPress={() => handleTaskCompletion(index)}>
                                <Text style={styles.controlText}>{item.completed ? '↩️' : '✅'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                                <Text style={styles.controlText}>🗑️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 5,
    },
    taskText: {
        fontSize: 16,
        flex: 1,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    itemControls: {
        flexDirection: 'row',
    },
    controlText: {
        fontSize: 20,
        marginLeft: 15,
    }
});

export default TaskList;

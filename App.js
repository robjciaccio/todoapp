import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native'
const { v4: uuidv4 } = require('uuid')
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [goalMode, setGoalMode] = useState(false)

  const removeGoalHandler = (goalId) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const addGoalHandler = (goal) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: uuidv4(), value: goal },
    ])
    setGoalMode(false)
  }

  const cancelHandler = () => {
    setGoalMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='New Goal' onPress={() => setGoalMode(true)}/>
      <GoalInput visible={goalMode} onAddGoal={addGoalHandler} cancelHandler={cancelHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            goal={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 100,
  },
})

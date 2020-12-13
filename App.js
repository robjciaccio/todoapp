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

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])

  const removeGoalHandler = (goalId) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const addGoalHandler = (goal) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: goal },
    ])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.id}
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

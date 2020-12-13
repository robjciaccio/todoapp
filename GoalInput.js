import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHander = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter Goal'
        style={styles.input}
        onChangeText={goalInputHander}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    width: '80%',
    fontSize: 30,
  },
})

export default GoalInput

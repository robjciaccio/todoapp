import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHander = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const goalHandler = () => {
    setEnteredGoal('')
    props.onAddGoal(enteredGoal)
  }

  const cancelAndReset = () => {
    props.cancelHandler()
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter Goal'
        style={styles.input}
        onChangeText={goalInputHander}
        value={enteredGoal}
      />
      <View style={styles.buttons}>    
      <Button title='ADD' onPress={goalHandler} />
      <Button title='Cancel' color='red' onPress={cancelAndReset}/>
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  },
  input: {
    textAlign: 'center',
    width: '80%',
    fontSize: 30,
  },
})

export default GoalInput

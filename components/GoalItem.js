import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
  console.log(props)
  return (
    <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>
      <View>
        <Text style={styles.goalsList}>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goalsList: {
    textAlign: 'center',
    padding: 40,
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 17,
  },
})

export default GoalItem

import React from 'react'
import { styles } from '../App.js'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


export default function RandomNumber({ id, randomNumber, isDisabled, onPress }) {

  const handlePress = () =>{
    onPress(id)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.box, isDisabled && styles.selectedBox]}>{randomNumber}</Text>     
    </TouchableOpacity>
  )
}

RandomNumber.propTypes = {
  id: PropTypes.number.isRequired,
  randomNumber: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

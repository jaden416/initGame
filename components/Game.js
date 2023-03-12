import React from 'react'
import RandomNumber from './RandomNumber.js';
import PropTypes from 'prop-types';
import { styles } from '../App.js'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';




export default function Game({ randomNumberCount }) {
  
  const [selectedNumbers, setSelectedNumbers] = React.useState([0, 5])

  // Create an array of random numbers
  let randomNumbers = Array
    .from({length: randomNumberCount})
    .map(()=> 1 + Math.floor(10 * Math.random()))

  // Create a sum of a SUBSET amount of the array
  let target = randomNumbers
    .slice(0, randomNumberCount-2)
    .reduce((acc, curr)=> acc + curr, 0)

  // Find out if number is selected
  const isNumberSelected = (numberIndex) => {
    // this function returns a boolean
    return selectedNumbers.indexOf(numberIndex) >= 0
  }

  // Modify the state
  const selectNumber = (numberIndex) =>{
    setSelectedNumbers((prev) => {
      // add more numbers
      return [...prev, numberIndex]
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.box}  >{target}</Text>
      <View style={styles.flex}>
        {randomNumbers.map((num, index)=>{
          return (
            <RandomNumber 
              key={index} 
              id={index}
              randomNumber={num}
              isDisabled={isNumberSelected(index)}
              onPress={selectNumber}
            />
          )
        })}
      </View>
    </View>
  );
}

Game.propTypes = {
  randomNumberCount: PropTypes.number.isRequired
}

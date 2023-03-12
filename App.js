import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game.js'
export default function App() {
  return (
    <Game randomNumberCount={6}/>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  target:{
    fontSize: 40,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center'
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 300
  },
  box: {
    padding: 50,
    backgroundColor: 'grey',
    fontSize: 28,
  },
  selectedBox: {
    opacity: .4,
  }
});

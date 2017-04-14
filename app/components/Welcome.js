import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Welcome extends React.Component {

  gogo = () => {
    this.props.onPressNext();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <TouchableHighlight onPress={this.gogo} style={styles.startButton}>
          <Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Verdana',
    fontSize: 50,
    color: 'white',
  },
  startButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
});
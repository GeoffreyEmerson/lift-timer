import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      minutes: 1,
      seconds: 5,
      running: false
    };
  }

  startTimer = () => {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer,running:true});
  }

  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState({running:false});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    let minutes = this.state.minutes;
    let seconds = this.state.seconds - 1;
    if (seconds < 0) {
      if (minutes == 0) {
        seconds = 0;
        this.stopTimer();
    } else {
        minutes--;
        seconds = 59;
      }
    }
    this.setState({
      minutes: minutes,
      seconds: seconds
    });
  }

  onPressStart = () => {
    this.state.running ? this.stopTimer() : this.startTimer();
  }

  onPressReset = () => {
    this.stopTimer();
    this.setState({
      minutes: 1,
      seconds: 5,
      running: false
    });
  }

  render() {
    let secondDisplay;
    if (this.state.seconds < 10) {
      secondDisplay = '0' + this.state.seconds;
    } else {
      secondDisplay = this.state.seconds;
    }
    return (
      <View style={styles.container}>
        <View style={styles.timerContainter}>
          <Text style={styles.text}>{this.state.minutes}:{secondDisplay}</Text>
        </View>
        <TouchableHighlight onPress={this.onPressStart} style={styles.startButton}>
          <Text>{this.state.running ? 'Pause' : 'Start'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressReset} style={styles.resetButton}>
          <Text>Reset</Text>
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
    fontFamily: 'Courier',
    fontSize: 30,
    color: 'white'
  },
  timerContainter: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'black'
  },
  startButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  resetButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green'
  },
});

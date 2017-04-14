import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Welcome from './Welcome';
import Timer from './Timer';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 0
    };
  }

  onPressNext = () => {
    this.setState({
      view: 1
    });
  }

  getCurrentView = () => {
    if(this.state.view === 0) {
      return (
        <Welcome onPressNext={this.onPressNext} />
      )
    } else {
      return (
        <Timer />
      )
    }
  }

  render() {
    let currentView = null;

    if(this.state.view === 0) {
      currentView = <Welcome onPressNext={this.onPressNext} />
    } else {
      currentView = <Timer />
    }
    
    return (
      {currentView}
    );
  }



}

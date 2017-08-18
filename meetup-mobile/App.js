import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {fetchMeetups} from './constants/api'

export default class App extends React.Component {
  static defaultProps = {
    fetchMeetups
  }

  state = {
    loading:false,
    meetups:[]
  }

  async componentDidMount(){
    this.setState({loading:true})
    const data = await this.props.fetchMeetups()
    console.log("DATA", data)
    this.setState({loading:false, meetups:data.meetups})
  }

  render() {
    if(this.state.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else{
      return (
        <View style={styles.container}>
          <Text>Meetup</Text>
          {this.state.meetups.map((meetup, i) => (
            <View key={i}>
              <Text>{meetup.title}</Text>
              <Text>{meetup.description}</Text>
            </View>
          ))}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

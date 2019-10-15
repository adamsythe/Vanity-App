import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'

const screens = ['about', 'music', 'cv', 'contact']

class Navigator extends Component {
	render () {
		return (
			<View style={styles.container}>
	      <Header />
	      <View style={styles.content} />
	      <Footer screens={screens} test={'test'}/>
		  </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'red',
  },
})

export default Navigator

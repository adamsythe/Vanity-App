import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import { screens } from '../data/NavigationData'

class Navigator extends Component {
	render () {
		return (
			<View style={styles.container}>
	      <Header />
	      <About />
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

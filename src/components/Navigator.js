import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Music from './Music'
import { screens } from '../data/NavigationData'

class Navigator extends Component {
	constructor(props) {
		super(props)
		this.state = {
      		screenIndex: 0,
    	}
    	this.changeScreen = this.changeScreen.bind(this)
	}
	changeScreen(index) {
		this.setState({
			screenIndex: index,
		})
	}
	chooseScreen() {
		const { screenIndex } = this.state
		if (screenIndex === 0) {
			return <About />
		}
		if (screenIndex === 1) {
			return <Music />
		}
		return <View style={styles.container}/>
	}

	render () {
		return (
			<View style={styles.container}>
	      <Header goToProfile={() => this.changeScreen(0)}/>
	      {
	      	this.chooseScreen()
	      }
	      <Footer
	      	screens={screens}
	      	changeScreen={this.changeScreen}
	      	screenIndex={this.state.screenIndex}
	      />
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

import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { music } from '../data/musicData'
import Song from './Song'


class Music extends Component {
	render () {
		return (
				<View style={styles.container}>
					<Song
		                title={music[0].title}
						artist={music[0].artist}
						url={music[0].link}
	              	/>
				</View>
			)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default Music
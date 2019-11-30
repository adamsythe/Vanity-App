import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { music } from '../data/musicData'
import Song from './Song'


class Music extends Component {
	constructor(props) {
    super(props)
    this.state = {
      filterText: '',
    }
    this.setFilterText = this.setFilterText.bind(this)
  }

  setFilterText(text) {
  	this.setState({
  		filterText: text.toLowerCase(),
  	})
  }

   filterMusic() {
  	const { filterText } = this.state
  	const filteredMusic = []
  	for (var i = 0; i < music.length; i++) {
  		const song = music[i]
  		const lowerSongTitle = song.title.toLowerCase()
  		const lowerSongArtist = song.artist.toLowerCase()
  		if(lowerSongTitle.includes(filterText)
  			|| lowerSongArtist.includes(filterText)) {
  			filteredMusic.push(song)
  		}
  	}
  	return (
  		filteredMusic
  	)
  }

	render () {
		const filteredMusic = this.filterMusic()
		return (
				<View style={styles.container}>
					<TextInput
            onChangeText={this.setFilterText}
            placeholder={'filter'}
            style={styles.textInput}
          />					
          <FlatList
						data={filteredMusic}
						renderItem={({ item, index }) => (
              <Song
                title={item.title}
								artist={item.artist}
								url={item.link}
              />
            )}
            keyExtractor={item => item.title}
            extraData={filteredMusic}
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
    textInput: {
    padding: 8,
    borderWidth: 1,
    marginBottom: 24,
  },
});

export default Music
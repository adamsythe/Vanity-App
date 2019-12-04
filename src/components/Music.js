import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { music } from '../data/musicData'
import Song from './Song'

let songList = music

class Music extends Component {
	constructor(props) {
    super(props)
    this.state = {
      filterText: '',
    }
    this.setFilterText = this.setFilterText.bind(this)
  }

  setFilterText(text) {
    const textWithoutLastLetter = text.substring(0, text.length - 1)
    if (textWithoutLastLetter !== this.state.filterText) {
      songList = music
    }
  	this.setState({
  		filterText: text.toLowerCase(),
  	})
  }

   filterMusic() {
    console.log(songList)
  	const { filterText } = this.state
    if (filterText === '') {
      return songList
    }
  	const filteredMusic = []
  	for (var i = 0; i < songList.length; i++) {
  		const song = songList[i]
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
		songList = this.filterMusic()
		return (
				<View style={styles.container}>
					<TextInput
            onChangeText={this.setFilterText}
            placeholder={'filter'}
            style={styles.textInput}
          />					
          <FlatList
						data={songList}
						renderItem={({ item, index }) => (
              <Song
                title={item.title}
								artist={item.artist}
								url={item.link}
              />
            )}
            keyExtractor={item => item.title}
            extraData={songList}
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
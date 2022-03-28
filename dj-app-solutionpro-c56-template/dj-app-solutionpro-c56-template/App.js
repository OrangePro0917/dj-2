import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
            text="                  Press Me"
            bgcolor="magenta"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3"
            text="                  Press Me"
            bgcolor="lime"
          />
          </View>
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3"
            text="                  Press Me"
            bgcolor="blue"
          />
            <DJButton
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3"
            text="                  Press Me"
            bgcolor="orange"
          />
        </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:40
  },
   musicButtonContainer : {
    alignItems:'center',   
  },
  stopButton :{
    width: '80%',
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:2,
    borderColor : 'black',
  }
});


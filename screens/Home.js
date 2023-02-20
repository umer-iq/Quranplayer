/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/
import {
SafeAreaView,
StyleSheet,
Text,
View,
Button,
FlatList,
ActivityIndicator,
TouchableOpacity,Image,
ScrollView,Dimensions,ImageBackground,
} from 'react-native';

import React, {useEffect, useState} from 'react';

import {setupPlayer, addTracks} from '../trackPlayerServices';
import TrackPlayer, {
useTrackPlayerEvents,
usePlaybackState,
useProgress,useTrackPlayerProgress,
Event,
State,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import NoInternet from './NoInternet';
const { width,height } = Dimensions.get('window');
function Playlist() {
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  
  const [playerpage, setplayerpage] = useState('');
  
async function loadPlaylist() {
const queue = await TrackPlayer.getQueue();
setQueue(queue);
}

useEffect(() => {
loadPlaylist();
}, []);

useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
if (event.state === State.nextTrack) {
 
TrackPlayer.getCurrentTrack().then(index => setCurrentTrack(index));

}
});

function PlaylistItem({index, title, isCurrent,url}) {
//const navigation = useNavigation();
// const [loading,setLoading] = useState(false)
const netInfo = useNetInfo();
function handleItemPress() {
 
TrackPlayer.skip(index);
//console.log(index)

// navigation.navigate('player', {index})
//setplayerpage('1');
}

return (
<View style={{justifyContent:'space-around',}}>
<TouchableOpacity onPress={handleItemPress}>
<ImageBackground  style={{width:width,height:height-850}} source={require('../assets/islamicbackground.png')} >
<Text
style={{top:0,
...styles.playlistItem,
...{backgroundColor: isCurrent ? '#2F4F4F' : 'transparent'},
...{color:isCurrent ? '#BDB76B' : 'black'}
}}>
{index + 1}.{title}

</Text>
</ImageBackground>

</TouchableOpacity>
<Ionicons style={{}}
name="play-skip-back-sharp"
size={10} color="transparent"
backgroundColor="transparent"

/> 
</View>
);
}

// function Renderitems ({item, index}) {

  
//     <PlaylistItem
//     index={index}
//     title={item.title}
//     isCurrent={currentTrack === index}
//     />
   
  
// }
function Renderitem({item,index}) {
  return (
  <PlaylistItem
  index={index}
  title={item.title}
  isCurrent={currentTrack === index}
  />
  )}

  const ITEM_HEIGHT = 5; // fixed height of item component
const getItemLayout = (queue, index) => {
  return {
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * queue.length,
    index,
  };
};
return (

<View style={styles.playlist}>
<Text style={{color:'#BDB76B',fontStyle:'italic',fontSize:20,textAlign:'center',backgroundColor:'#2F4F4F'}}>Voice:MISHARY RASHID ALAFASY</Text>

<FlatList style={{paddingTop:10}}
data={queue}
removeClippedSubviews={true}
initialNumToRender={113}
nestedScrollEnabled
scrollEnabled={true}
maxToRenderPerBatch={113}
updateCellsBatchingPeriod={113}
windowSize={21}
getItemLayout={getItemLayout}
        
renderItem={Renderitem}
/>

<Controls />
</View>

);
}

  // function Renderitem({PlaylistItem,item,index,currentTrack}) {
  // return (
  // <PlaylistItem
  // index={index}
  // title={item.title}
  // isCurrent={currentTrack === index}
  // />
  // )}

function Controls({onShuffle,loading}) {
const playerState = usePlaybackState();
const progress = useProgress();

async function handlePlayPress() {
if ((await TrackPlayer.getState()) === State.Playing) {
TrackPlayer.pause();
} else {
TrackPlayer.play();
}
}

return (
<View
style={{width:width, marginBottom:0,backgroundColor:'#2F4F4F', flexDirection: 'row', flexWrap: 'wrap',justifyContent:'center',}}>
{/* {loading ? <ActivityIndicator size='large' color="#00ff00" /> : ''} */}
<TrackProgress />
<Slider
style={styles.progressBar}
value={progress.position}
minimumValue={0}
maximumValue={progress.duration}
thumbTintColor="#BDB76B"
minimumTrackTintColor="white"
maximumTrackTintColor="#BDB76B"
onSlidingComplete={async value => {
await TrackPlayer.seekTo(value);
}}
onValueChange={async i =>{await TrackPlayer.seekTo(value.progress.duration)}}

/>
<View style={{width:width,flexDirection: 'row',justifyContent:'space-around'}}>
<Ionicons style={{}}
name="play-skip-back-sharp"
size={38} color="#BDB76B"
backgroundColor="transparent"
onPress={() => TrackPlayer.skipToPrevious()}
/> 
<Ionicons style={{}}
name="play-back" 
size={38} color="#BDB76B"
backgroundColor="white"
onPress={() => TrackPlayer.seekTo(progress.position - 10)}
/>
<Ionicons style={{}}
name={playerState === State.Playing ? 'ios-pause-circle' : 'ios-play-circle'}
size={65} color="#BDB76B"
backgroundColor="transparent"
onPress={handlePlayPress}
/>
<Ionicons style={{}}
name="play-forward"
size={38} color="#BDB76B"
backgroundColor="white"
onPress={() => TrackPlayer.seekTo(progress.position + 10)}
/>
<Ionicons style={{}}
name="play-skip-forward-sharp"
size={38} color="#BDB76B"
backgroundColor="transparent"
onPress={() => TrackPlayer.skipToNext()}
/>

</View>
</View>
);
}

function TrackProgress() {
const {position, duration} = useProgress(200);
const [loading,setLoading] = useState(false)
function format(seconds) {
let mins = parseInt(seconds / 60)
.toString()
.padStart(2, '0');
let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
return `${mins}:${secs}`;
}

const [info, setInfo] = useState({});
useEffect(() => {
setTrackInfo();
}, []);

useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
if (event.state === State.nextTrack) {
setTrackInfo();
}
});

async function setTrackInfo() {
   
  setLoading(true);
const track = await TrackPlayer.getCurrentTrack();
const info = await TrackPlayer.getTrack(track);
setInfo(info);
setLoading(false);
}

return (
<View style={{flexDirection:'row',justifyContent:'space-evenly',width:width}}>
 {loading ? <ActivityIndicator size='small' color="#ffffff" /> : ''} 
<Text style={styles.songTitle}>{info.title}  {format(position)} / {format(duration)}</Text>

</View>
);


}
function Header() {
const [info, setInfo] = useState({});
useEffect(() => {
setTrackInfo();
}, []);

useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
if (event.state === State.nextTrack) {
setTrackInfo();
}
});

async function setTrackInfo() {
const track = await TrackPlayer.getCurrentTrack();
const info = await TrackPlayer.getTrack(track);
setInfo(info);
}

return (
<View>
<Text style={styles.songTitle}>{info.title}</Text>

{/* <Text style={styles.artistName}>{info.artist}</Text> */}
</View>
);
}

export default function Home() {
const [isPlayerReady, setIsPlayerReady] = useState(false);
const progress = useProgress();
const netInfo = useNetInfo();
//const { position, duration, bufferedPosition, percentComplete } = useProgress();
//  const pos = async () => await TrackPlayer.getPosition();
// console.log(TrackPlayer.getPosition())
// // subtract 10 seconds from position
// const reverse = pos - 10;
// const forward = pos + 10;

// seek to new position

useEffect(() => {
async function setup() {
let isSetup = await setupPlayer();

const queue = await TrackPlayer.getQueue();
if (isSetup && queue.length <= 0) {
await addTracks();
}

setIsPlayerReady(isSetup);
}

setup();
}, []);

if (!isPlayerReady) {
return (
<SafeAreaView style={styles.container}>
<ActivityIndicator size="large" color="#bbb" />
</SafeAreaView>
);
}

return (
<SafeAreaView style={styles.container}>

    
    
{netInfo.isConnected ? '' : <NoInternet/>}
<Playlist />
   
</SafeAreaView>
);
}


const styles = StyleSheet.create({
container: {
width:width,height:height,
justifyContent: 'center',
padding: 0,
backgroundColor: '#87ceeb',
}, bottomSection: {
borderTopColor: 'black',
borderWidth: 1,
width: width,
alignItems: 'center',
paddingVertical: 15,
},container1: {
  flex: 1,
  justifyContent: 'center',
},
horizontal: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 10,
},
progressBar: {
width: width-30,
height: 20,
marginTop: 0,
flexDirection: 'row',top:0,
},
playlist: {
width:width,height:height,
marginTop: 0,
marginBottom: 0,
},
playlistItem: {
fontSize: 20,
paddingTop: 10,
paddingBottom: 10,
paddingLeft: 0,
paddingRight: 0,
borderRadius: 0,
textAlign:'center',
},
trackProgress: {
marginTop: 0,
textAlign: 'center',
fontSize: 40,
color: '#eee',
},
songTitle: {

textAlign:'center',
fontSize: 20,
marginTop: 0,padding:0,
color: '#BDB76B',
},
artistName: {
fontSize: 24,
color: '#888',
},
});


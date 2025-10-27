import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionButtons() {

    const [isPlaying, setIsPlaying] = useState(false);

    function playPauseTrack() {
        if(!isPlaying) {
            console.log("Musica retomada");
            setIsPlaying(true);
        } else {
            console.log("Musica Pausada");
            setIsPlaying(false)
        }
    }

    function nextTrack() {
        console.log("Próxima Música");
    }

    
    function previousTrack() {
        console.log("Música Anterior");
    }

    return (
        <View style = {styles.itemsBox}>
            <TouchableOpacity style = {styles.previousButton} onPress={previousTrack}>
                <Image
                    style={styles.icons}
                    source={require('../assets/player_icons/previous-icon.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style = {styles.playPauseButton} onPress={playPauseTrack}>
                <Image
                    style={styles.icons}
                    source={require('../assets/player_icons/play.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style = {styles.nextButton} onPress={nextTrack}>
                <Image
                    style={styles.icons}
                    source={require('../assets/player_icons/next-icon.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemsBox: {
        width: 345,
        height: 65,

        flex: 1,

        marginTop: 855,

        position: 'absolute',

        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        verticalAlign: 'middle',
    },

    previousButton: {
        position: 'absolute',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',

        marginLeft: 30,
        
        height: 54,
        width: 54,

        borderRadius: 54,
                
    },

    nextButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'center',

        marginRight: 30,

        height: 54,
        width: 54,

        borderRadius: 54,

    },

    playPauseButton: {
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',

        height: 54,
        width: 54,

        borderRadius: 54,
        backgroundColor: '#134B9E'
    },

    icons: {                      
        alignContent: 'center',
        alignSelf: 'center',
        color: '#ffffff',
        marginLeft: 5,
    }
})
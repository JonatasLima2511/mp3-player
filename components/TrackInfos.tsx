import { Image, StyleSheet, Text, View } from 'react-native';

export default function TrackInfos() {

    return (
        <View style={styles.container}>

            <View style={styles.trackImageBox}>
                <Image
                    style={styles.trackImage}
                    source={require('../assets/tracks/human.jpg')}
                />
            </View>

            <View style={styles.trackInfos}>
                <Text style = {styles.trackTitleText}>
                    Human
                </Text>

                <Text style = {styles.trackAuthorText}>
                    Rag'n'Bone Man
                </Text>

            </View>

            <View style = {styles.progressBar}>

            </View>

        </View>
    ) 

}

const styles = StyleSheet.create({

        container: {
            position: 'absolute',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            
            marginTop: 220,

            height: 600,
            width: 345,

            // borderColor: 'black',
            // borderWidth: 1,

        },

        trackImageBox: {
            width: 268,
            height: 268,

            marginTop: 69,

            borderRadius: 20,
            boxShadow: '4px 6px 4px #0000001a',

            // borderColor: 'red',
            // borderWidth: 1,

        },

        trackImage: {
            width: 268,
            height: 268,
            borderRadius: 20,
        },

        trackInfos: {
            marginTop: 141,

            padding: 0,
            width: 345, 
            height: 60,

            flexDirection: 'column',

            textAlign: 'left',

            // borderColor: 'green',
            // borderWidth: 1,
        },

        trackTitleText: {
            fontFamily: 'Inter_800ExtraBold',
            fontSize: 25,
            color: '#ffffff'
        },

        trackAuthorText: {
            fontFamily: 'Inter_300Light',
            fontSize: 15,
            color: '#ffffff',
        },

        progressBar: {
            width: 345,
            height: 35,

            marginTop: 25,

            alignSelf: 'flex-end',
 
            // borderColor: 'yellow',
            // borderWidth: 1,
        }

    })
import ActionButtons from './ActionButtons';

import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';


export default function Player() {

    return (
        <View>
            <LinearGradient 
            colors={['#99DEEE', '#134B9E']}
            style={styles.background}
            />

            <View style = {styles.playerOptions}/>

            <ActionButtons/>
                    
        </View>
    );   
}

const styles = StyleSheet.create({
    
    background: {
        height: 960,
    },

    trackImage: {
        borderColor: 'black'
    },

    playerOptions: {
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 850,
        width: 345,
        height: 64,
        backgroundColor: '#ffffff',
        opacity: 0.6,
    }
});
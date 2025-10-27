import Player from './components/Player';

import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';
import { Inter_300Light, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Inter_800ExtraBold,
    Inter_300Light,
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <View>
      <Player/>
    </View>
  );
}

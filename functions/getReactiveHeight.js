import { Dimensions, StatusBar } from 'react-native';


export default function getReactiveHeight(heightProc){
  const {
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  const safeHeight = SCREEN_HEIGHT - StatusBar.currentHeight;

  return safeHeight * ( heightProc / 100 )
}
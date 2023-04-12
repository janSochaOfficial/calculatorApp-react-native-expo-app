import { Dimensions } from 'react-native';



export default function getReactiveWidth(widthProc){
  const {
    width: SCREEN_WIDTH,
  } = Dimensions.get('window');
  return SCREEN_WIDTH * ( widthProc / 100 )
}
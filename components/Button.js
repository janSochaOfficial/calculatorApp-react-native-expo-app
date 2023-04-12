import React from 'react'
import { TouchableHighlight } from 'react-native'

const Button = (props) => {
  return (
    <TouchableHighlight  activeOpacity={0.3} underlayColor="rgba(255,255,255, 0.2)" onPress={props.onPress} style={props.style}>
      {props.body}
    </TouchableHighlight>
  )
}

export default Button
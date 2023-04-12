import React, {useMemo}  from 'react'
import { View, StyleSheet, Text } from 'react-native'
import getReactiveHeight from '../functions/getReactiveHeight'
import getReactiveWidth from '../functions/getReactiveWidth'

export default function Display(props) {  
  useMemo(() => {
    styles = {
      ...styles,
      display: {
        ...styles.display,
        gap: getReactiveHeight(3),
        padding: getReactiveHeight(3),
        height: getReactiveHeight(40),
        width: getReactiveWidth(100),
      },
      eqazion: {
        ...styles.eqazion,
        fontSize: (props.isLandcape) ? getReactiveHeight(15) :getReactiveHeight(5)
      },
      finalEqazion: {
        ...styles.finalEqazion,
        fontSize: (props.isLandcape) ? getReactiveHeight(9) :getReactiveHeight(3)
      },
      answer: {
        ...styles.answer,
        fontSize: (props.isLandcape) ? getReactiveHeight(9) :getReactiveHeight(3)
      },
      finalAnswer: {
        ...styles.finalAnswer,
        fontSize: (props.isLandcape) ? getReactiveHeight(21) :getReactiveHeight(7)
      }
    }

  })
  
  return (
    <View style={styles.display}>
      <Text style={(props.isFinal) ? styles.finalEqazion: styles.eqazion}>{props.eqazion}</Text>
      <Text style={(props.isFinal) ? styles.finalAnswer: styles.answer}>{props.answer}</Text>
    </View>
  )
}

let styles = new StyleSheet.create({
  display: {
    gap: getReactiveHeight(3),
    padding: getReactiveHeight(3),
    height: getReactiveHeight(40),
    width: getReactiveWidth(100),
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#333333",
    color: "white", 
  },
  eqazion:{
    fontSize: getReactiveHeight(5),
    color: "white", 
    textAlign: "right"
  },
  finalEqazion: {
    fontSize: getReactiveHeight(3),
    color: "gray", 
    textAlign: "right"
  },
  answer: {
    fontSize: getReactiveHeight(3),
    color: "gray", 
    textAlign: "right"
  },
  finalAnswer: {
    fontSize: getReactiveHeight(7),
    color: "white", 
    textAlign: "right"
  }
})
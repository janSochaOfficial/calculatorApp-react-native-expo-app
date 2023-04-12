import React, { useMemo } from 'react'
import Button from "./Button"
import { View, StyleSheet, Text } from 'react-native'
import getReactiveHeight from '../functions/getReactiveHeight'
import getReactiveWidth from '../functions/getReactiveWidth'

const numbers = [
  "7", "8", "9",
  "4", "5", "6",
  "1", "2", "3",
  ".", "0", "00"
];

const topPanel = [
  "Del", "C", "(", ")"
]

const operations = [
 "/", "*", "-", "+", "=" 
]
const advancedOperations = [
  "^", "Sqrt", "Sin", "Cos"
]



export default function Keyboard(props) {
  useMemo(() => {
    styles = {
      ...styles,
      topPanel: {
        ...styles.topPanel,
        width: getReactiveWidth(100),
        height: (props.isLandcape) ? getReactiveHeight(15) : getReactiveHeight(10)
      },
      tileText: {
        ...styles.tileText,
        fontSize: (props.isLandcape) ? getReactiveHeight(10) : getReactiveHeight(5)
      },
      operations: {
        ...styles.operations,
        width: getReactiveWidth(25)
      }
    }

    styles.advancedOperations.width = getReactiveWidth(10)
  })

  const getRows = () => {
    return Array(numbers.length / 3).fill([])
      .map((el, i) => {
        return Array(3).fill(0).map((e, j) => {
          return <Button body={
            <Text style={styles.tileText}>{numbers[i * 3 + j]}</Text>
          } onPress={() => props.addChar(numbers[i * 3 + j])} key={j} style={styles.tile}/> 
        })
      })
  }
  
  return (
    <View style={styles.keyboard}>
      <View style={styles.topPanel}>
        {
          topPanel.map((el, key) => {
            return <Button body={
              <Text style={styles.tileText}>{el}</Text>
            } onPress={() => props.handleOperation(el)} key={key} style={styles.tile}/> 
          })
        }
      </View>
      <View style={styles.bottomPanel}>
      <View style={styles.numbers}>
        {
          getRows().map((el, i) => {
            return (
              <View style={styles.row} key={i}>
                {el}
              </View>
            )
          })
        }
      </View>
      {
        (props.isLandcape) ? 
        <View style={{...styles.advancedOperations, width: getReactiveWidth(15)}}>
        {
          advancedOperations.map((el, key) => {
            return <Button body={
              <Text style={styles.tileText}>{el}</Text>
            } onPress={() => props.handleOperation(el)} key={key} style={styles.tile}/> 
          })
        }
        </View>
        :
        <></>
      }
      <View style={styles.operations}>
        {
          operations.map((el, key) => {
            return <Button body={
              <Text style={styles.tileText}>{el}</Text>
            } onPress={() => props.handleOperation(el)} key={key} style={styles.tile}/> 
          })
        }
      </View>
      </View>
      
    </View>
  )
}

let styles = new StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "green",
    color: "black", 
  },
  numbers: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "gray",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  tile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tileText : {
    fontSize: getReactiveHeight(5),
  },
  operations: {
    width: getReactiveWidth(25)
  },
  advancedOperations: {
    backgroundColor: "lightgray",
   
  },
  bottomPanel: {
    flex: 1,
    flexDirection: "row",
    color: "black", 
  },

  topPanel: {
    width: getReactiveWidth(100),
    height: getReactiveHeight(10),
    flexDirection: "row",
    backgroundColor: "#555555",
    color: "black", 
  }
});
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBarStyle, StatusBar, Dimensions } from 'react-native';
import { evaluate } from "mathjs"
import Display from './components/Display';
import Keyboard from './components/Keyboard';

export default function App() {
  const [equazion, setEqazion] = useState("")
  const [answer, setAswer] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const [isLadscape, setIsLadncape] = useState(false);

  Dimensions.addEventListener("change", () => {
    const dim = Dimensions.get('screen');
    setIsLadncape(dim.height <= dim.width);
  })

  const addChar = (char) => {
    setEqazion((old) => old + char);
    setIsFinal(false)
  }
  const dellChar = () => {
    if (equazion[equazion.length - 1] == "(" 
        && isNaN(equazion[equazion.length - 2]))
    {
      setEqazion((old) => {
        const eqArr = old.split("").reverse()
        const lastNum = eqArr.filter((el) => !isNaN(el) || el == ")")[0]
        const indexOfLast = old.lastIndexOf(lastNum)
        return old.substring(0, indexOfLast + 1)
      });
      return;
    }
    console.log(Number(equazion[equazion.length - 2]) == NaN);
    setEqazion((old) => old.substring(0, old.length - 1));
    setIsFinal(false)
  }
  const clear = () => {
    setEqazion("")
    setIsFinal(false)
  }
  const finalize = () => { 
    try {
      const newAns = evaluate(autoClose().toLowerCase())
      setAswer(newAns)
      setIsFinal(true)
    }
    catch { 
      alert("Can't calculate!")
    }
  }
  
  const autoClose = () => { 
    const openNo = equazion.split("(").length
    const closeNo = equazion.split(")").length
    return equazion + Array(openNo - closeNo).fill(")").join("")
   }
  const handleOperation = (operation) => {
    if (
      operation == "Sqrt" ||
      operation == "Pow" || 
      operation == "Sin" || 
      operation == "Cos"
    )
    {
      addChar(operation + "(")
      return
    }
    switch (operation) {
      case "Del":
        dellChar()
        return;
      case "C":
        clear()
        return;
      case "=":
        finalize()
        return
      default:
        addChar(operation)
    }
   }

  useEffect(() => {
    const dim = Dimensions.get('screen');
    setIsLadncape(dim.height <= dim.width);

  }, []);

  useEffect(() => {
    try {
      const newAns = evaluate(autoClose().toLowerCase())
      setAswer(newAns)
    }
    catch { 
      
    }
  }, [equazion]);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#333333"
        barStyle='light-content'
      />
      <Display eqazion={equazion} answer={answer} isFinal={isFinal} isLandcape={isLadscape}/>
      <Keyboard addChar={addChar} handleOperation={handleOperation} isLandcape={isLadscape}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

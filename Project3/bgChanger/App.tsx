
import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {
    const [randomBackground, setRandomBackground] = useState("#000000")

    const generateColor = ()=>{
      const hexRange = "0123456789ABCDEF";
      let color = '#'

      for(let i=0; i<6; i++){
        color += hexRange[Math.floor(Math.random() * 16)];
      }
      setRandomBackground(color)
    }


  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#FFFFFF",
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionBtnTxt:{
    fontSize:24,
    color:'black',
    fontWeight:'bold'
    
  }
});

export default App;

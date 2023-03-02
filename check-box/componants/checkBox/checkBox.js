import { useState } from "react";
import { StyleSheet, View, Pressable, setOptions, Text } from "react-native";

function CheckBox({data, setOptions, options}){
  const [press, setPress] = useState(0)
  
  function onCheckHandler(){
    // if (press === 0){
    //   const add = press + 1
    //   setPress(add)
    // } else if (press > 1){
    //   setPress(0)
    // }
    
  }

  return (
    <>
    {data.map((item)=> <View key={item.value} style={styles.container}>
    <Pressable  onPress={()=> setOptions(item.value)}>
      <View style={styles.checkBoxContanier}>
        <View style={styles.checkBoxInner}>
            <View style={ item.value === options ? styles.checkBoxCenterColour : styles.checkBoxCenter}></View>
        </View>
      </View>
    </Pressable>
    <Text>{item.value}</Text>
    </View>
    )
    }
    </>
  )
}

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.75
  },
  checkBoxContanier:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxInner:{
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxCenter: {
    width: 30,
    height: 30,
    borderRadius: 25,
    // backgroundColor: 'grey',
    // elevation: 9,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxCenterColour: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: 'grey',
    elevation: 4,
  }
})
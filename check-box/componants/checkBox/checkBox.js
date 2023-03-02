import { StyleSheet, View, Pressable, Text } from "react-native";

function CheckBox({data, setOptions, options}){

  return (
    <>
    {data.map((item)=> <View key={item.value} style={styles.container}>
    <Pressable style={styles.checkBoxContanier} onPress={()=> setOptions(item.value)}>
        <View style={styles.checkBoxInner}>
            <View style={ item.value === options ? styles.checkBoxCenterColour : styles.checkBoxCenter}></View>
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
    flex: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxInner:{
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxCenter: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxCenterColour: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'grey',
    elevation: 4,
  }
})
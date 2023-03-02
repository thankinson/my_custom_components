import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from './componants/checkBox/checkBox';

export default function App() {
  const [options, setOptions] = useState()
  const data = [{ value: 'DVD'}, {value: 'Blu-Ray'}, {value: '4k'}]
  return (
    <View style={styles.container}>
      <View style={styles.button}>
      <CheckBox data={data} setOptions={setOptions} options={options}/>
      </View>
      <Text>{options}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row'
  }
});

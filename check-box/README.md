# Radial Button / Check box

### This coponant is a Radial button/Check box that can be added to any react-native project that requires multiple choice selection.
#
## Hos to use

### To use this function all you need to do is pass the required Data to the componant through props. 

### For this to work you pass 3 props to your componant.
1. the useStae props ```options``` and ```setOptiions```
2. An array containig objects 

` const data = [
  { value: 'Value1' },
  { value: 'Value2' },
  { value: 'Value3' }
  ] `

  ## Pass the props!

  ### to pass the props all you need do is add them to the component you import to App.js or if using navigation screens your screen of choice.

  `` <CheckBox data={data} setOptions={setOptions} options={options}/> ``


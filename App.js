import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default function App() {
  return (
<View style={styles.btnContainer}>
        <TouchableOpacity style={{ height: 110, marginTop: 10, alignItems: 'center', backgroundColor: "gray", justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Mind</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    margin: 5,
 
  },
  red: {
    color: 'red',
  },
  btnContainer:{
    justifyContent:"space-between"
  },

});
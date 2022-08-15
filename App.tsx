import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from "./src/components/Swipeable";
import {SafeAreaView} from "react-native";
export default function App() {
  return (
      <SafeAreaView>
          <Swipe/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

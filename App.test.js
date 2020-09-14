import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TestableScene from './src/TestableScene';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AppRegistry } from 'react-native';
import { Tester, TestHookStore, useCavy, wrap } from 'cavy';
import ExampleSpec from './specs/exampleSpec';

const testHookStore = new TestHookStore();

export default () => {
  const generateTestHook = useCavy();
  const TestableText = wrap(Text);

  return (
    <Tester specs={[ExampleSpec]} store={testHookStore}>
      <View style={styles.container}>
        <TestableScene />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Tester>
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
AppRegistry.registerComponent('cavyTest', () => AppWrapper);

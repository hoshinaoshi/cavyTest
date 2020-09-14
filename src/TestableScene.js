import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { hook } from 'cavy';

class Scene extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          ref={this.props.generateTestHook('Scene.TextInput')}
          onChangeText={console.log("")}
        />
      </View>      
    );
  }
}

const TestableScene = hook(Scene);
export default TestableScene;

import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Card,
  Chip,
} from 'react-native-paper';

export default function App() {
  console.log('Hola como etas');
  return (
    <PaperProvider>
      <SafeAreaView>
        <Chip onPress={() => console.log('Pressed')}>Example Chip</Chip>
        <Text>App mejorado</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <Card>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

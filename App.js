import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Provider as PaperProvider, Button, Card} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  console.log('Hola como etas');
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView>
          <Text>App mejorado</Text>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Press me
          </Button>
          <Card>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

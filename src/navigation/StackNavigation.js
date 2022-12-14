/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line react/jsx-no-comment-textnodes
import react from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'TheMovieApp'}}
      />
      <Stack.Screen name="movie" component={Movie} options={{title: ''}} />
      <Stack.Screen
        name="news"
        component={News}
        options={{title: 'Nuevas Peliculas'}}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{title: 'Peliculas Populares'}}
      />
      <Stack.Screen name="searc" component={Search} options={{title: ''}} />
    </Stack.Navigator>
  );
}

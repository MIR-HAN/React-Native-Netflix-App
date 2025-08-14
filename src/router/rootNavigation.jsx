import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/favorites';
import Home from '../screens/home';
import { MOVIELIST, TAB } from '../utils/routes';
import TabNavigation from './tabNavigation';
import MovieList from '../screens/movieList';
import Header from '../components/header/header';



const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,

                header: () => (
                    <Header />
                )
            }}
        >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name={TAB} component={TabNavigation} />
            <Stack.Screen name={MOVIELIST} component={MovieList} />
        </Stack.Navigator>
    );
};



export default RootNavigation;

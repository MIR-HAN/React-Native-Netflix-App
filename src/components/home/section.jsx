import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from '../ui/sectionHeader';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from './movieCard';

const Section = (props) => {
    const { item } = props

    const { upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies } = useSelector((state) => state.movies)

    const getData = () => {

        switch (item.value) {
            case "upcoming":
                return upcomingMovies;
            case "popular":
                return popularMovies;
            case "top_rated":
                return topRatedMovies;
            case "now_playing":
                return nowPlayingMovies;
            default:
                return upcomingMovies;
        }
    }

    return (
        <View style={styles.container}>
            <SectionHeader title={item.title} value={item.value} />

            <FlatList
                horizontal
                data={getData()}
                renderItem={(({ item }) => <MovieCard item={item} />)}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 190,
    },
    text: {
        fontSize: 20,
    },
});

export default Section;
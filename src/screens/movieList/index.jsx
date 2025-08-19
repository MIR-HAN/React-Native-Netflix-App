import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/home/movieCard';
import { aplicationColors } from '../../theme/color';
import MovieListCard from '../../components/movieList/movieListCard';


const MovieList = (props) => {
    const { value } = props.route.params
    const { upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies } = useSelector((state) => state.movies)

    const getData = () => {

        switch (value) {
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
       
            <FlatList
             numColumns={2}
             keyExtractor={((item)=>item.id)}
                data={getData()}
                renderItem={(({ item }) => <MovieListCard item={item} />)}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:aplicationColors.PRIMARY

    },
 
});

export default MovieList;
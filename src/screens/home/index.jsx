import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { aplicationColors } from '../../theme/color';
import { screenStyles } from '../../styles/screenStyles';
import SectionHeader from '../../components/ui/sectionHeader';
import { FlatList } from 'react-native';
import widgets from "../../widgets/widgets.json"
import Section from '../../components/home/section';
import { useDispatch } from 'react-redux';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../../store/actions/movieActions';
const Home = () => {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchUpcomingMovies())
  dispatch(fetchTopRatedMovies())
  dispatch(fetchPopularMovies())
  dispatch(fetchNowPlayingMovies())

},[])

  return (
    <View style={screenStyles.container}>
      <FlatList data={widgets}
        renderItem={(({ item }) => <Section item={item} />)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home; 
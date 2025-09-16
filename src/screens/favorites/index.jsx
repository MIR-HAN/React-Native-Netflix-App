import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/screenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import MovieCard from '../../components/home/movieCard';
import { useLocalStorage } from 'react-use';
import { toggleFavorites } from '../../store/slices/favoriteSlice';

const Favorites = () => {
  const dispatch =useDispatch();
  const { favoriteMovies } = useSelector((state) => state.favorites)
  const [storedFavorites]=useLocalStorage("favorites",[])


  useEffect(()=>{
    if(storedFavorites && storedFavorites.length > 0){
      storedFavorites.forEach((movie)=> dispatch(toggleFavorites(movie)))
    }

  },[])

  return (
    <View style={screenStyles.container}>
      <FlatList
      numColumns={3}
        data={favoriteMovies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </View>
  );
};

const styles=StyleSheet.create({

  container:{
   
  }

})


export default Favorites;
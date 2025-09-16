import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,Pressable, Alert } from 'react-native';
import { aplicationColors } from '../../theme/color';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail, removeDetailData } from '../../store/actions/movieActions';
import Spinner from '../../components/ui/spinner';
import { width, height } from '../../utils/constants';
import { IMAGE_BASE_URL } from '../../service/urls';
import { clearMovieDetail } from '../../store/slices/movieSlice';
import { Heart } from 'iconsax-react-native';
import { toggleFavorites } from '../../store/slices/favoriteSlice';
import { useLocalStorage } from 'react-use';


const MovieDetail = ({ route }) => {

  const { movieId } = route?.params

  const { movieDetailData, pendingDetail } = useSelector((state) => state.movies)

  const { favoriteMovies } = useSelector((state) => state.favorites)

  const checkFavorite = favoriteMovies.some((item)=> item.id === movieId)

  const [favoritesMovie,setFavoritesMovie] = useLocalStorage("favorites", [])


  const handleToggleFavorite = (movie) => {
    const exist = favoritesMovie.some(m => m.id === movie.id);
    let updatedFavorites;
  
    if (exist) {
      updatedFavorites = favoritesMovie.filter(m => m.id !== movie.id);
    } else {
      updatedFavorites = [...favoritesMovie, movie];
    }
  
    setFavoritesMovie(updatedFavorites); 
    dispatch(toggleFavorites(movie)); 
  };
  



  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchMovieDetail(movieId))

    return () => {
      dispatch(clearMovieDetail());
    }

  }, [dispatch, movieId])

  return (
    <View style={styles.container}>
      {
        pendingDetail && !movieDetailData ?
          <Spinner /> :
          <ScrollView>
            <Image
              style={{ width: width, height: height * 0.30, borderRadius: 10, resizeMode: "contain" }}
              source={{
                uri: `${IMAGE_BASE_URL}${movieDetailData?.backdrop_path}`,
              }}
            />
  

            <Pressable 
            onPress={()=>handleToggleFavorite(movieDetailData)}
            style={{ position: "absolute", top: 20, right: 20 }}>
            <Heart size={30} color={checkFavorite ? aplicationColors.YELLOW : aplicationColors.WHITE}/>
            </Pressable>

            <Text numberOfLines={1} style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 10 }}>{movieDetailData?.title}</Text>

            <Text style={{ color: "white", fontSize: 18, margin: 5, color: "gray" }}>{movieDetailData?.overview}</Text>

            <Text numberOfLines={1} style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>Release Date: {movieDetailData?.release_date}</Text>

            <View style={{ flexDirection: "row", alignItems: "center", alignContent: "center", justifyContent: "center", gap:5, marginTop:10 }}>

              <Text numberOfLines={1} style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Budget: </Text>

              <Text style={{ color: aplicationColors.YELLOW, fontSize: 20, fontWeight: "bold", marginTop: 20 }}>$ {movieDetailData?.budget}</Text>
            </View>




          </ScrollView>


      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: aplicationColors.PRIMARY,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: aplicationColors.YELLOW,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default MovieDetail;
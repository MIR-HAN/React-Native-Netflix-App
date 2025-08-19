import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { aplicationColors } from '../../theme/color';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail, removeDetailData } from '../../store/actions/movieActions';
import Spinner from '../../components/ui/spinner';
import { width, height } from '../../utils/constants';
import { IMAGE_BASE_URL } from '../../service/urls';
import { clearMovieDetail } from '../../store/slices/movieSlice';

const MovieDetail = ({ route }) => {

  const { movieId } = route?.params

  const { movieDetailData, pendingDetail } = useSelector((state) => state.movies)
  console.log(movieDetailData)

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchMovieDetail(movieId))

    return () => {
      dispatch(clearMovieDetail());
    }

  }, [])

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

            <View style={{position:"absolute", top:20, right:10}}>
              <Text style={styles.text}>{movieDetailData?.popularity}</Text>
            </View>

            <Text numberOfLines={1} style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 10 }}>{movieDetailData?.title}</Text>

            <Text  style={{ color: "white", fontSize: 18, margin: 5, color: "gray" }}>{movieDetailData?.overview}</Text>

            <Text numberOfLines={1} style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop:20 }}>Release Date: {movieDetailData?.release_date}</Text>


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
    color:aplicationColors.YELLOW,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default MovieDetail;
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { BASE_URL, IMAGE_BASE_URL } from '../../service/urls';
import { height, token, width } from '../../utils/constants';
import MovieDetail from '../../screens/movieList/movieDetail';
import { MOVIEDETAIL } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const MovieCard = ({ item }) => {

    const navigation =useNavigation()

    return (
        <Pressable style={styles.container} onPress={()=> navigation.navigate(MOVIEDETAIL, {movieId:item.id})}>
            <Image
                style={{ width:width*0.27, height:height*0.12,borderRadius:10 }}
                source={{
                    uri: `${IMAGE_BASE_URL}${item.poster_path}`,
                }}
            />
            <Text numberOfLines={1} style={{color:"white", }}>{item.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        margin:5,
        justifyContent:"center",
        alignItems:"center",
        width: width*0.29,
 
 

    },
    text: {
        color: "white"
    },
});

export default MovieCard;
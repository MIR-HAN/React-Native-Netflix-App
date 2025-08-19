import React from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import {  IMAGE_BASE_URL } from '../../service/urls';
import { height, width } from '../../utils/constants';
import { aplicationColors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/routes';

const MovieListCard = ({ item }) => {
    const navigation = useNavigation()
    return (
        <Pressable 
        onPress={()=> navigation.navigate(MOVIEDETAIL, {movieId:item.id})}
        style={styles.container}>
            <Image
                style={{ width:width*0.40, height:height*0.3,borderRadius:10 }}
                source={{
                    uri: `${IMAGE_BASE_URL}${item.poster_path}`,
                }}
            />
            <Text numberOfLines={1} style={{color:"white",fontSize:16, fontWeight:"bold" }}>{item.title}</Text>
            <Text numberOfLines={3} style={{color:"white",fontSize:12, margin:5, color:aplicationColors.GRAY }}>{item.overPressable}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        margin:5,
        justifyContent:"center",
        alignItems:"center",
        width: width*0.45,
 

    },
    text: {
        color: "white"
    },
});

export default MovieListCard;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BASE_URL, IMAGE_BASE_URL } from '../../service/urls';
import { height, token, width } from '../../utils/constants';

const MovieCard = ({ item }) => {


    return (
        <View style={styles.container}>
            <Image
                style={{ width:width*0.27, height:height*0.12,borderRadius:10 }}
                source={{
                    uri: `${IMAGE_BASE_URL}${item.poster_path}`,
                }}
            />
            <Text numberOfLines={1} style={{color:"white", }}>{item.title}</Text>
        </View>
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
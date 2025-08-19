import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { aplicationColors } from '../../theme/color';

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={aplicationColors.WHITE} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default Spinner;
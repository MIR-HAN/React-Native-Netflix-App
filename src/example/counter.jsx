import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/slices/counterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>{count}</Text>

            <Button 
            onPress={()=> dispatch(increment())}
            title="increment" color="green" />
            <Button 
            onPress={()=>dispatch(decrement())}
            title="decrement" color="red" />
               <Button 
            onPress={()=>dispatch(incrementByAmount(5))}
            title="additional" color="blue" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default Counter;
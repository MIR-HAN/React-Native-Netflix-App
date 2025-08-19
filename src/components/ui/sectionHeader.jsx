import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { aplicationColors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { MOVIELIST } from '../../utils/routes';

const SectionHeader = (props) => {
  const navigation = useNavigation();
  const { title, value } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={() => navigation.navigate(MOVIELIST,{value:value})}
      >
        <Text style={[styles.title, styles.seeAll]}>See all</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    marginVertical:20,
    marginHorizontal:10,
    marginRight:15
    

  },
  title: {
    color: aplicationColors.WHITE,
    fontSize: 18,
    fontWeight: "600"
  },
  seeAll: {
    color: aplicationColors.YELLOW
  }
});

export default SectionHeader;
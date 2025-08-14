import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { aplicationColors } from '../../theme/color';
import { height, width } from '../../utils/constants';
import { HambergerMenu, Menu, SearchFavorite, SearchNormal } from 'iconsax-react-native';
import { SearchBar } from 'react-native-screens';


const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",

      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal: insets.left + 10,
      backgroundColor: aplicationColors.PRIMARY,

    }}>
      <HambergerMenu size={30} color={aplicationColors.WHITE} name="menu" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
        <Image
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: "contain"
          }}
          source={require('../../assets/images/Logonetflix.png')}
        />
      </View>

      <SearchNormal size={30} color={aplicationColors.WHITE} />
    </View>
  );
};


export default Header;
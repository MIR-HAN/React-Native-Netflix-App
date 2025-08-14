import React from 'react';
import { FAVORITES, HOME } from '../../utils/routes';
import { FavoriteChart, Heart, Home } from 'iconsax-react-native';

const TabIcon = ({ size, color, focused, iconName, route, name }) => {

    if (iconName == HOME)

        return (
            <Home size={size} color={color} />
        );
    else if (iconName == FAVORITES)
        return (
            <Heart size={size} color={color} />
        )

};

export default TabIcon;

import React from 'react';
import { Navigation, NavigationUl,NavigationLi ,NavigationText } from './BottomNavigationStyled';

const BottomNavigation:React.FC = () => {

    return (
        <Navigation>
            <NavigationUl>
                <NavigationLi>
                        <NavigationText to="/">Home</NavigationText>
                </NavigationLi>
                <NavigationLi>
                        <NavigationText to="/">Transaction</NavigationText>
                </NavigationLi>
                <NavigationLi>
                        <NavigationText to="/">Budget</NavigationText>
                </NavigationLi>
                <NavigationLi>
                        <NavigationText to="/about">Profile</NavigationText>
                </NavigationLi>
            </NavigationUl>
        </Navigation>
    )
}

export default BottomNavigation
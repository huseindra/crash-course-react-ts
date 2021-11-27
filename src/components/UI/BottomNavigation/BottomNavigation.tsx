
import React from 'react';
import { Navigation, NavigationUl,NavigationLi ,NavigationText } from './BottomNavigationStyled';

const BottomNavigation:React.FC = () => {

    return (
        <Navigation>
            <NavigationUl>
                <NavigationLi>
                    <NavigationText href="#a">Home</NavigationText>
                </NavigationLi>
                <NavigationLi>
                    <NavigationText href="#a">Explore</NavigationText>
                </NavigationLi>
                <NavigationLi>
                    <NavigationText href="#a">History</NavigationText>
                </NavigationLi>
                <NavigationLi>
                    <NavigationText href="#a">Profile</NavigationText>
                </NavigationLi>
            </NavigationUl>
        </Navigation>
    )
}

export default BottomNavigation
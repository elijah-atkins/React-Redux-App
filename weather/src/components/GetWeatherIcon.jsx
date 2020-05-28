import React from 'react';
import LC from './weatherIcons/LC';
import C from './weatherIcons/C';
import HC from './weatherIcons/HC';
import S from './weatherIcons/S';
import LR from './weatherIcons/LR';
import HR from './weatherIcons/HR';
import T from './weatherIcons/T';
import H from './weatherIcons/H';
import SL from './weatherIcons/SL';
import SN from './weatherIcons/SN';

const GetWeatherIcon = ({ abbr }) => {
    switch(abbr){
        case ('sn'):
            return (<SN />);
        case ('sl'):
            return(<SL />);
        case ('h'):
            return(<H />);
        case ('t'):
            return(<T />);
        case ('hr'):
            return(<HR />);
        case('lr'):
            return(<LR />);
        case('s'):
            return(<S />);
        case('hc'):
            return(<HC />);
        case('lc'):
            return(<LC />);
        case('c'):
            return(<C />);
        default:
             return (<div>Icon Not Found</div>)
    }
}

export default GetWeatherIcon;
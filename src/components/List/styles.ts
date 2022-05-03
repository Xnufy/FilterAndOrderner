import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;

    background-color: ${({theme}) => theme.colors.secondary};

    border-radius: 10px;

    padding: 5px 10px;
    margin-top: 20px;
`;

export const Header = styled.View`
    width: 80%;

    flex-direction: row;
    align-items: center;

`;
export const HeaderImg = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;

    border-radius: 50px;

    background-color: ${({theme}) => theme.colors.primary};
    
`;
export const TextDog = styled.Text`
    color: ${({theme}) => theme.colors.third};

    font-size: ${RFValue(15)}px;
    font-weight: bold;

    padding-left: 10px;
`;

export const TextDescription = styled.Text`
    color: ${({theme}) => theme.colors.fourth};

    font-size: ${RFValue(15)}px;
    font-weight: 300;

    margin-top: 5px;
`;
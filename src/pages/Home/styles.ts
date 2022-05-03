/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '../../global/theme';


export const Container = styled.View`
    width: 100%;
    height: 100%;

    background-color: ${({theme}) => theme.colors.primary};

    padding: 10px;

`;

export const ViewTop = styled.View`
    width: 100%;

    flex-direction: row;
`;

export const ViewInput = styled.View`
    width: 80%;
    height: ${RFValue(60)}px;
    background-color: ${({theme}) => theme.colors.secondary};
    
    flex-direction: row;
    align-items: center;

    padding: 10px;
    margin-bottom: 10px;

    border-radius: 25px;
`;

export const Icon = styled(FontAwesome5)`
    color: ${({theme}) => theme.colors.third};

    font-size: ${RFValue(22)}px;
`;

export const InputSearch = styled.TextInput.attrs({
    placeholderTextColor: '#f8f9fa',
    placeholder: 'Pesquisar',
    color: '#f8f9fa'
})`
    width: 90%;
    height: 100%;

    font-size: ${RFValue(12)}px;
    font-weight: 300;
    
    padding-left: 10px;
`;

export const ButtonOrder = styled.TouchableOpacity`
    width: 20%;
    height: ${RFValue(50)}px;

    justify-content: center;
    align-items: center;
`;

export const ContainerPopUp = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const PopUp = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;

  justify-content: center;
  align-items: center;

  background-color: #fff;

  border-radius: 10px;
`;

export const ButtonPopUp = styled.TouchableOpacity`

`;

export const Text = styled.Text`
  color: #000;

  font-size: 14px;
`;
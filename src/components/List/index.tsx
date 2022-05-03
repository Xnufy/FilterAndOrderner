/* eslint-disable prettier/prettier */
import React from 'react';
import {
Container,
Header,
HeaderImg,
TextDog,
TextDescription,
} from './styles';

export default function List({data}){
    return(
         <Container key={data.key}>
            <Header>
                <HeaderImg source={{uri: data.img}}/>
                <TextDog numberOfLines={1}>{data.name}</TextDog>
            </Header>
            <TextDescription>{data.description}</TextDescription>
        </Container>
    )
}

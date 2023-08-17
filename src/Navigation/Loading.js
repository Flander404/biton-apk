import { View, Text, Image } from 'react-native'
import React from 'react'
import { styled } from 'styled-components/native'

const Post = styled.View`
    width: 100%;
    height:100%;
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const PostImage = styled.Image`
    width:100%;
    height:500px;
    position:absolute;
    bottom:0px;

`;
const PostImage2 = styled.Image`
    width:196px;
    height:196px;
`;
const PostImage3 = styled.Image`
    width:174px;
    height:174px;
    
    position: absolute;
`;
const PostImage4 = styled.Image`
    width:90px;
    height:90px;
    
    position: absolute;
`;

const Loading = () => {
  return (
    <Post>
        <PostImage source={
            require('../image/Rectangle2.png')
        }/>
        <PostImage2 source={
            require('../image/Ellipse1.png')
        }/>
        <PostImage3 source={
            require('../image/Ellipse2.png')
        }/>
        <PostImage4 source={
            require('../image/Слой_x0020_1.png')
        }/>
    </Post>
  )
}

export default Loading
import React from 'react'
import styled from '@emotion/styled'

const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.brightest};
    height: 10vh;
    width: 100%
`;

const BottomBar = () => {
  return (
    <CustomDiv>
      contact: 530-368-6616
      email: mrheffern@gmail.com
    </CustomDiv>
  )
}

export default BottomBar
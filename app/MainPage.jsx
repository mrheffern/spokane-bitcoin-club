import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react'

const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};
    height: 140vh;
    width: 100%
`;

const CustomH1 = styled.h1`
    color: #2F2E41;
`;

const CustomH3 = styled.h3`
    color: #000;
`;

const StyledGrid = styled(Grid)`
    height: 100vh;
`;

const CircleContainer = styled.div`
  width: 325px;
  height: 325px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.primary.dark}; /* Replace with your desired color */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px; /* Replace with your desired font size */
`;

const HorizontalLine = styled.div`
  height: 2px;
  background-color: #FAE84E; /* Yellow color */
  margin: 20px 0; /* Adjust the margin to position the line */
`;

function MainPage() {
  return (
    <CustomDiv style={{display: 'flex'}}>
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={4}>
                <CustomH1>Empowerment for those who need it most</CustomH1>
                <HorizontalLine />
                <CustomH3>Bitcoin is a grassroots technology for communities to build lasting wealth</CustomH3>
            </Grid>
            <Grid item xs={4}>
                <CircleContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="147" viewBox="0 0 192 295" fill="none">
                        <path d="M15.25 59.25H132.917C144.619 59.25 155.843 63.8989 164.118 72.1739C172.393 80.449 177.042 91.6723 177.042 103.375C177.042 115.078 172.393 126.301 164.118 134.576C155.843 142.851 144.619 147.5 132.917 147.5M132.917 147.5C144.619 147.5 155.843 152.149 164.118 160.424C172.393 168.699 177.042 179.922 177.042 191.625C177.042 203.328 172.393 214.551 164.118 222.826C155.843 231.101 144.619 235.75 132.917 235.75H15.25M132.917 147.5H44.6667M44.6667 59.25V235.75M59.375 15.125V59.25M118.208 15.125V59.25M59.375 235.75V279.875M118.208 235.75V279.875" stroke="#FAE84E" stroke-width="29.4167" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </CircleContainer>
            </Grid>/
        </Grid>
    </CustomDiv>
  );
}

export default MainPage
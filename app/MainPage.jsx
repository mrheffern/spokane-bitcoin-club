import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react'

const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};
    height: 700px;
    width: 100%;
    display: flex;
`;



const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.primary.dark}; /* Replace with your desired color */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px; /* Replace with your desired font size */
  border-style: solid;
  border-color: purple;
`;

const HorizontalLine = styled.div`
  height: 2px;
  background-color: #FAE84E; /* Yellow color */
  margin: 20px 0; /* Adjust the margin to position the line */
`;

function MainPage() {
  return (
    <CustomDiv>
        <Container>
            <Grid container alignItems="center" spacing={2} marginTop={20} justifyContent='center'>
                <Grid item xs={12} md={4}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align='center' variant='h2'>Empowerment for those who need it most</Typography>
                        </Grid>
                        <Grid item>
                            <HorizontalLine />
                        </Grid>
                        <Grid item>
                            <Typography align='center' variant='h5'>Bitcoin is a grassroots technology for communities to build lasting wealth</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{width: '100%'}} src='assets/images/Bitcoin.svg' />
                </Grid>
            </Grid>
        </Container>
    </CustomDiv>
  );
}

export default MainPage
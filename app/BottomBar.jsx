import React from 'react'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material';

const CustomDiv = styled.div`
    background-color: black;
    color: white;
    height: 50px;
    width: 100%
`;

const BottomBar = () => {
  return (
    <CustomDiv>
      <Grid container alignItems='center' style={{height: "100%"}}>
        <Grid item>
          <Typography style={{marginLeft: "10px"}}>
            Phone: 530-368-6616
            Email: mrheffern@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </CustomDiv>
  )
}

export default BottomBar
import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Input, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Wheel } from 'spin-wheel/src/wheel';
import WinningDialog from '@components/WinningDialog';


const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};
    height: 140vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const WheelSpinPage = () => {

  const [openSpinResult, setOpenSpinResult] = useState(false);
  const [winningIndex, setWinningIndex] = useState(0);
  const [emailValue, setEmailValue] = useState("");

  const wheelRef = useRef();

  const handleTextChange = (event) => {
    setEmailValue(event.target.value);
  }

  const submitHandler = () => {
    setEmailValue("");
    wheelRef.current.spin(1000);
  }

  const handleRest = (event) => {
    console.log(event.currentIndex);
    setWinningIndex(event.currentIndex);
    setOpenSpinResult(true);
  }

  const theme = useTheme();

  const containerRef = useRef();

  
  const wheelItems = {
      items: [
        { label: '4 KSats', backgroundColor: theme.palette.secondary.main },
        { label: '4 KSats', backgroundColor: '#f7931a' },
        { label: '4 KSats', backgroundColor: theme.palette.secondary.main },
        { label: '17 KSats', backgroundColor: '#f7931a'},
        { label: '4 KSats', backgroundColor: theme.palette.secondary.main},
        { label: '4 KSats', backgroundColor: '#f7931a'},
        { label: '4 KSats', backgroundColor: theme.palette.secondary.main},
        { label: '4 KSats', backgroundColor: '#f7931a'},
        { label: '17 KSats', backgroundColor: theme.palette.secondary.main},
        { label: '4 KSats', backgroundColor: '#f7931a'},
        { label: '4 KSats', backgroundColor: theme.palette.secondary.main},
        { label: '4 KSats', backgroundColor: '#f7931a'}
      ]
    };


  useEffect(() => {

    // Create a new Wheel using the container and props
    // Make sure the containerRef.current is not null before creating the Wheel
    if (containerRef.current) {
      wheelRef.current = new Wheel(containerRef.current, wheelItems);
      wheelRef.current.pointerAngle = 0;
      wheelRef.current.overlayImage = '/assets/images/example-3-overlay.svg';
      wheelRef.current.isInteractive = false;
      wheelRef.current.rotationSpeedMax = 1000;
      wheelRef.current.itemLabelFontSizeMax = 20;
      wheelRef.current.rotationResistance = -100;

      wheelRef.current.onRest = handleRest;
    }
  }, []);

  return (
    <CustomDiv>
      <Container>
        <WinningDialog open={openSpinResult} close={setOpenSpinResult} prizeAmount={wheelItems.items[winningIndex].label} />
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={6}>
            <h1>Join our mailing list to spin the wheel for a chance to win BTC!</h1>
            <TextField value={emailValue} onChange={handleTextChange}/><Button variant="contained" color="secondary" onClick={submitHandler}>Submit and Spin!</Button>
          </Grid>
          <Grid item xs={6}>
            <Grid container justifyContent="center">
              <div className='wheel-container' style={{height: 500, width: 500}} ref={containerRef}></div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </CustomDiv>
  )
}

export default WheelSpinPage
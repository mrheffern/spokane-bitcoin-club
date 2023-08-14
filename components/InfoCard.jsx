import styled from '@emotion/styled'
import { Grid, Card, Box, Typography, Container } from '@mui/material';
import React from 'react'

const InfoCard = (props) => {
  return (
    <Card sx={{height: 450}}>
      <Container>
        <Typography variant="h5" align='center' marginY={4}>{props.title}</Typography>
        <Box>
          <Box marginBottom={4} sx={{textAlign: 'center'}}>
            {props.picture} 
          </Box>
          <Box>
            <Typography>{props.text}</Typography>
          </Box>
        </Box>
      </Container>
    </Card>
  )
}

export default InfoCard
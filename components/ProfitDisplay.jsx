import { Typography } from '@mui/material'
import React from 'react'

const ProfitDisplay = (props) => {
  console.log(props.profit);
  if (Number.isNaN(props.profit) || props.profit <= 0) {
    return (
    <Typography align='center' variant='h4'>
      Please enter an investment amount
    </Typography>
    )
  } else {
    const formattedAmount = props.profit.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return (
      <Typography align='center' variant='h4'>
        Your orignal investment would be {formattedAmount} today!
      </Typography>
    )
  }
}

export default ProfitDisplay
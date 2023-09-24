import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

const MeetupDetails = (props) => {
    let date = new Date(props.date);
  return (
    <Dialog open={props.open} onClose={props.onClose}>
        <DialogContent>
            <DialogTitle>
                <Typography variant='h4' align='center'>Caffeine and Coin</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant='h6'>Date & Time: {date.getMonth() + 1}/{date.getDay()}/{date.getFullYear()} at 6:00pm</Typography>
                <Typography variant='h6'>Location: Sketchy railway tunnel on the North Side</Typography>
                <Typography variant='h6'>Come hang out and dodge hobo knifings while discussing and learning about bitcoin!</Typography>
            </DialogContent>
        </DialogContent>
    </Dialog>
  )
}

export default MeetupDetails
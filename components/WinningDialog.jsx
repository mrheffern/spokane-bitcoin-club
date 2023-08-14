import { Dialog, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const WinningDialog = (props) => {

    const okHandler = () => {
        props.close(false);
    }

  return (
    <Dialog open={props.open}>
        <DialogTitle>You Win!</DialogTitle>
        <DialogContent>You won {props.prizeAmount}! Come to our next meeting and show your ID to claim your prize.</DialogContent>
        <DialogActions>
            <Button onClick={okHandler}>Ok</Button>
        </DialogActions>
    </Dialog>
  )
}

export default WinningDialog
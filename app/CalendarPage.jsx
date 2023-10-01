import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Box, Container, Grid, Paper, Typography, Badge } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';
import MeetupDetails from '@components/MeetupDetails';


const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.brightest};
    height: 140vh;
    width: 100%;
    display: flex;
    align-items: center;

`;

const isFirstWednesday = (day) => {
  // console.log(day);
  // console.log(day instanceof Date);
  // console.log(JSON.stringify(day));
    let date = new Date(day);
    return date.getDay() === 3 && date.getDate() <= 7;
}

const MeetupDay = (props) => {
  const {day, outsideCurrentMonth, ...other } = props;

  const isSelected = !props.outsideCurrentMonth && isFirstWednesday(day);

  return (
    <Badge
      key={props.day.toString()}
      variant='dot'
      color='secondary'
      invisible={!isSelected}
      overlap='circular'
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}



/*

The goal of the calendar is to be able to click on dates and have a popup that shows our meetup details. 
3. Also need to change colors

*/

const CalendarPage = () => {
  const [openMeetupDetails, setOpenMeetupDetails] = useState(false);
  const [selectedMeetupDate, setSelectedMeetupDate] = useState();

  const closeMeetupDetails = () => {
    setOpenMeetupDetails(false);
  }

  const checkToOpenDetails = (value, selectionState) => {
    if (isFirstWednesday(value)) {
      setSelectedMeetupDate(value);
      setOpenMeetupDetails(true);
    }
  }

  return (
    <CustomDiv>
      <Container>
        <MeetupDetails open={openMeetupDetails} onClose={closeMeetupDetails} date={selectedMeetupDate} />
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <Typography variant="h3">Calendar</Typography>
            </Box>
            <Box>
              <Paper>
                <DateCalendar 
                  slots={{
                    day: MeetupDay
                  }}
                  onChange={checkToOpenDetails}
                />
              </Paper>
            </Box>
            <Box>
              <Typography variant="h4" marginY={2}>Trade</Typography>
              <Typography variant="body1">Looking to buy bitcoin? Sell bitcoin? Buy goods and services with bitcoin? Come and meet up with us! Lets change our world one transaction at a time. </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="h4" marginTop={6} marginBottom={2}>Education</Typography>
              <Typography variant="body1" marginBottom={2}>Curious? Skeptical? Can’t get enough? We have monthly meetups where we teach people what BTC is, why it matters, and how it works. Let us show you how BTC can help YOU!</Typography>
            </Box>
            <Box>
            <Typography variant="h4" marginBottom={2}>Socialize</Typography>
              <Typography variant="body1">Just feel like hanging out with people that understand the the value of financial empowerment and freedom? We love to get together for coffee, a drink, or a bite and talk about bitcoin and everything else.</Typography>
            </Box>
            <Box>
              <img src='assets/images/SuiteBTC.svg' />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CustomDiv>
  )
}

export default CalendarPage
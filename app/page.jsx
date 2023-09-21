"use client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { AppBar, Grid, ThemeProvider, Toolbar } from '@mui/material';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import theme from './theme';
import MainPage from './MainPage';
import PerksPage from './PerksPage';
import WheelSpinPage from './WheelSpinPage';
import CalendarPage from './CalendarPage';
import GraphPage from './GraphPage';
import BottomBar from './BottomBar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// const Graph = () => {
//   const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 800, pv: 2400, amt: 2400}];
//   return (
//     <LineChart width={600} height={300} data={data}>
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     </LineChart>
//   )

// }

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.light
}));

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div id='mainDiv'>
          <AppBar>
            <StyledToolbar>
              Spokane Bitcoin Club
            </StyledToolbar>
          </AppBar>
          <MainPage />
          <PerksPage />
          <WheelSpinPage />
          <CalendarPage />
          {/* <GraphPage /> */}
          <BottomBar />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default Home;
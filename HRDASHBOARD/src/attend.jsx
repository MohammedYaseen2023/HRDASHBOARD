// import * as React from 'react';
import { PieChart, pieArcClasses, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { fromDate, toDate } from './signals';
import { Stack } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//
import SimpleMediaQuery from './mediaQuery'
import R_StatusFunc from './R_Status';
import TestChart from "./ChartPieAttend";


//
export function DateFrom() {
  // console.log(dayjs(fromDate.value).format('DD/MM/YYYY'));
  return (

    <Box dir='rtl' >
      <Box sx={{ display: 'flex' }} >
        <Box p={1} >
          <Box sx={{ textAlign: 'center', fontWeight: 'bold' }} >
            <label htmlFor="fromDate">من تاريخ   </label>
          </Box>
          <DatePicker
            id="fromDate"
            selected={fromDate.value}
            onChange={(event) => fromDate.value = event}
            dateFormat="dd/MM/yyyy"

          />
        </Box>
        <Box p={1} >
          <Box sx={{ textAlign: 'center', fontWeight: 'bold' }} >
            <label htmlFor="toDate"> الى تاريخ  </label>
          </Box>

          <DatePicker
            id="toDate"
            selected={toDate.value}
            onChange={(event) => toDate.value = event}
            dateFormat="dd/MM/yyyy"
          />
        </Box>
      </Box>
    </Box>

  );
}

function App() {
  return (
    <div >

      <DateFrom fromDate={fromDate} />
      <Stack direction={'row'} spacing={2}>
        <Box width={400}>
          <Card sx={{ minWidth: 275 }} >
            <CardContent>

              <Typography dir="rtl" sx={{ fontSize: 16 }} color="text.main" gutterBottom>
                 الحضور والانصراف للفترة من  {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
              </Typography>
              <TestChart />
            </CardContent>
          </Card>

        </Box>
        <Box width={400}>
          <Card sx={{ minWidth: 275 }} >
            <CardContent>

              <Typography dir="rtl" sx={{ fontSize: 16 }} color="text.main" gutterBottom>
                 الحضور والانصراف للفترة من  {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
              </Typography>
              <TestChart />
            </CardContent>
          </Card>

        </Box>

      </Stack>
      {/* </Box> */}
      {/* <SimpleMediaQuery /> */}
      <R_StatusFunc />
    </div>
  );
}

export default App;

//

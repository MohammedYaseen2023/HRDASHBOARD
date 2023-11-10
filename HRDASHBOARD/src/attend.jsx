// import * as React from 'react';
import { PieChart, pieArcClasses, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { fromDate, toDate } from './signals';
import PieArcLabel from './chartPieArcLabel'
import PieChartWithCenterLabel from './chartPieChartWithCenterLabel'
import { Stack } from '@mui/material';
//
import SimpleMediaQuery from './mediaQuery'
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
        <Box  >
          <br />
          <Box dir="rtl" sx={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center', color: 'secondary.main' }} >
            الحضور والانصراف للفترة من {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
          </Box>
          < PieArcLabel  />
        </Box>
        <Box >
          <br />
          <Box dir="rtl" sx={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center', color: 'secondary.main' }} >
            الملتزمين والمتاخرين للفترة {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
            <br />
          </Box>
          <br />
          <PieChartWithCenterLabel />
        </Box>

      </Stack>
      {/* </Box> */}
      {/* <SimpleMediaQuery /> */}
    </div>
  );
}

export default App;

//

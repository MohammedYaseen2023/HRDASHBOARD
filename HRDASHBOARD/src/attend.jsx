
// import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import dayjs from 'dayjs'

import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { avatarClasses } from '@mui/material';



export function DateFrom({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) {
  const handleFromChange = (date) => {
     
    onFromDateChange(dayjs(date).format('DD/MM/YYYY') )
  }
  const handleToChange = (date) => {
    
    onToDateChange(dayjs(date).format('DD/MM/YYYY') )
  }

  return (
    <>
    <DatePicker
      selected={fromDate}
      onChange={handleFromChange}
      />
    <DatePicker
      selected={toDate}
      onChange={handleToChange}
      />
      </>
  );
}
//



//


const data = [
  { id: 0, value: 40, label: 'الحضور' },
  { id: 1, value: 15, label: 'الغياب' },
  { id: 2, value: 20, label: 'المتاخرين' },
];

export function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={300}
    />
  );
}


function App() {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())

  return (
    <div >
      <DateFrom fromDate={fromDate} f toDate={toDate} onFromDateChange={(value) => setFromDate(value)}
        onToDateChange={(value) => setToDate(value)}
      />

      <Box dir="rtl" sx={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', color: 'secondary.main' }} >
      كشف الحضور والانصراف للفترة من {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
          </Box>
         
      <Box sx={{ pt: 2 }} />
      <PieActiveArc />

    </div>
  )
}

export default App;


// 



// import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SingleDate from './api'
//import DateFrom from './api'

import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { avatarClasses } from '@mui/material';



var From_D=new Date();

export function DateFrom() {
  const [date, setDate] = useState(new Date());
  function handleDate(date) { 
    From_D=date;

  }
  return (
    <DatePicker
      selected={date}
      onChange={(date) => {
        setDate(date); // Update the state with the selected date
        handleDate(date); // Call your custom function with the selected date
      }}
    />
  );
}




// const From_D = () => {
//   return 1111
// };

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

export function aaa(){
  return  From_D;
}



function App() {
  return (
    <div >
      <DateFrom />
      <Box sx={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', color: 'secondary.main' }} >
        {/* كشف الحضور والانصراف للفترة من {Date1()} و {Date1()}</Box> */}
      كشف الحضور والانصراف للفترة من   و  {هنا يظهر التاريخ اذا تغيير}  </Box>

      <Box sx={{ pt: 2 }} />
      <PieActiveArc />

    </div>
  )
}

export default App;


// 


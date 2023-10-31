
// import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SingleDate from './api'
import  Date1 from './api'

import React, { useState } from 'react';
 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file


const From_D = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};



const data = [
  { id: 0, value: 40, label: 'الحضور' },
  { id: 1, value: 15, label: 'الغياب' },
  { id: 2, value: 20, label: 'المتاخرين' },
];

export function Footer() {
  return (
    <div className='text-bg-primary text-center fs-5'>
      By Mohammed Yaseen  </div>
  )
}

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


  return (  
      <div >
        <From_D/>
        <br></br>
       <Box sx={{fontWeight: 'bold', fontSize: '25px', textAlign: 'center',color: 'secondary.main'}} >
           كشف الحضور والانصراف ليوم {Date1()} </Box>
       {/* <SingleDate/> */}
         
       <Box sx={{ pt: 2 }} />
       <PieActiveArc/>
       
       
        
      </div>
  )
}

export default App

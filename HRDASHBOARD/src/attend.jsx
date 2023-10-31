
import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SingleDate from './api'

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
       
       <SingleDate/>
       <Box sx={{ pt: 2 }} />
       <PieActiveArc/>
      </div>
  )
}

export default App

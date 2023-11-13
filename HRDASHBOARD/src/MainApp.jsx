import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ElderlyIcon from '@mui/icons-material/Elderly';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { pink, green } from '@mui/material/colors';
import { AttendCount } from './signals';
import { Grid, Stack } from '@mui/material';
 function AttendCountFunction() {
  AttendCount.value = 19;
  return AttendCount
}
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const CardAttend = (
  <React.Fragment>

      <CardContent>
              <ElderlyIcon sx={{ color: green[700], fontSize: 30 }} />
        <Typography sx={{ fontSize: 18 }} color="text.main" gutterBottom>
          Attendance
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {AttendCountFunction()}
        </Typography>
      </CardContent>
  </React.Fragment>
);



const CardLate = (
  <React.Fragment>
      <CardContent>
        
        <AccessAlarmsIcon sx={{ color: pink[700], fontSize: 30 }} />
        <Typography sx={{ fontSize: 18 }} color="text.main" gutterBottom>
          Late
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {AttendCountFunction()}
        </Typography>
      </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (

    <Box sx={{ minWidth: 275 }} >
          <Box  >
          <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          Employee Attend
        </Typography>
    </Box>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={3} >
        <Card variant="outlined">{CardAttend}</Card>
        </Grid>

        <Grid item xs={12} sm={3}>
        <Card variant="outlined">{CardLate}</Card> 
        </Grid>

      </Grid>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={3} >
        <Card variant="outlined">{CardAttend}</Card>
        </Grid>

        <Grid item xs={12} sm={3}>
        <Card variant="outlined">{CardLate}</Card> 
        </Grid>

      </Grid>
    </Box>
  );
}

// working card
// const card = (
//   <React.Fragment>
   
//       <CardContent>
//         <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
//           Employee Attend
//         </Typography>
//         <ElderlySharpIcon sx={{ color: green[700], fontSize: 30 }} />
//         <Typography sx={{ fontSize: 18 }} color="text.main" gutterBottom>
//           Attendance
//         </Typography>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           {AttendCountFunction()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//       </CardActions>

//   </React.Fragment>
// );
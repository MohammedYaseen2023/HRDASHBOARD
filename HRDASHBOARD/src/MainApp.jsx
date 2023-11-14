import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ElderlyIcon from '@mui/icons-material/Elderly';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { pink, green,blue,deepPurple } from '@mui/material/colors';
import { AttendCount } from './signals';
import { Grid, Stack } from '@mui/material';
import {ChartPieAttend,ChartPiePrecision} from "./ChartPieAttend";

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
              <CheckCircleOutlineIcon sx={{ color: green[700], fontSize: 30 }} />
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
        
        <AccessAlarmsIcon sx={{ color: deepPurple[700], fontSize: 30 }} />
        <Typography sx={{ fontSize: 18 }} color="text.main" gutterBottom>
          Late
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {AttendCountFunction()}
        </Typography>
      </CardContent>
  </React.Fragment>
);

const CardAbscence = (
  <React.Fragment>
      <CardContent>
        
        <NotInterestedIcon sx={{ color: pink[700], fontSize: 30 }} />
        <Typography sx={{ fontSize: 18 }} color="text.main" gutterBottom>
          Abscence
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {AttendCountFunction()}
        </Typography>
      </CardContent>
  </React.Fragment>
);

const CardAbscence1 = (
  <React.Fragment>
      <CardContent>
        
        <PersonOffIcon sx={{ color: blue[300], fontSize: 30 }} />
        <Typography sx={{ fontSize: 18 }} color="text.main" gutterBottom>
          Abscence
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {AttendCountFunction()}
        </Typography>
      </CardContent>
  </React.Fragment>
);


const CardMainEmployee = (
  <React.Fragment>
      <CardContent>
      
      <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          Employees Attendance
      </Typography>

      </CardContent>
  </React.Fragment>
);

const CardTotalEmployee = (
  <React.Fragment>
      <CardContent>
      
      <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          Total Employees 400
      </Typography>

      </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (

    <Box sx={{ minWidth: 275 }} mt={1}>
         
       
    <Grid container spacing={2} padding={1}  >
    <Grid item xs={12} sm={6}  >
    
     <Card variant="outlined">{CardMainEmployee}
      <Grid container    >
        <Grid item xs={12} sm={6} padding={1}>
        <Card variant="outlined">{CardAttend}</Card>
        </Grid>

        <Grid item xs={12} sm={6} padding={1}>
        <Card variant="outlined">{CardLate}</Card> 
        </Grid>

      </Grid>

      <Grid container   >
        
        <Grid item xs={12} sm={6} padding={1}>
          <Card variant="outlined">{CardAbscence}</Card>
        </Grid>

        <Grid item xs={12} sm={6}  padding={1}>
         <Card variant="outlined">{CardAbscence1}</Card> 
        </Grid>
      </Grid>

      </Card>

      </Grid> 
      <Grid item xs={12} sm={6}  >

      <Card variant="outlined">{CardTotalEmployee}
      <ChartPieAttend/>
      </Card>
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
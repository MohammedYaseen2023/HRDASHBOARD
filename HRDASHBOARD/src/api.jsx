import Box from '@mui/material/Box';
import React, { useState } from 'react';
 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { fromDate } from './Signals';
import { AttendData } from './Signals';
import {AttendCount,AbsenceCount,LateCount} from './Signals';
AttendData=[60,40,20];
AttendCount=100;
AbsenceCount=10;
LateCount=20;
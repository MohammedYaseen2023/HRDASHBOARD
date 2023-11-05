import Box from '@mui/material/Box';
import React, { useState } from 'react';
 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { fromDate } from './signals';

// export function DateFrom() {
  
//       return (
//           <DatePicker
//           selected={date}
//           onChange={(event) => (fromDate.value = event.target.value)}
          
//       />
//     );
//   }
     
  export function DateFrom1() { 
    function handleDate(date) { 
        alert(fromDate);
    }
    return (
        <DatePicker
        selected={date}
        onChange={(event) => {
          (fromDate.value = event.target.value); // Update the state with the selected date
            handleDate(date); // Call your custom function with the selected date
      }}
    />
  );
 }

 export default DateFrom1;

            // function Date1(){
            // const from_d='31-10-2023'
            // return from_d
            
            // }
            // export default singleDate;
            //  export default Date1;

        //    let From_D=new Date();

// export function DateFrom() {
//     const [date, setDate] = useState(new Date());
//     function handleDate(date) { 
//         From_D=date;
//     }
//     return (
//         <DatePicker
//         selected={date}
//         onChange={(date) => {
//             setDate(date); // Update the state with the selected date
//             handleDate(date); // Call your custom function with the selected date
//       }}
//     />
//   );
// }
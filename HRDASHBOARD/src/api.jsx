import Box from '@mui/material/Box';

const from_d ='01/01/2023'

function singleDate (){
return (
 <Box sx={{fontWeight: 'bold', fontSize: '25px', textAlign: 'center',color: 'secondary.main'}} >
          كشف الحضور والانصراف ليوم {from_d}</Box>
     
)   
}

export default singleDate;
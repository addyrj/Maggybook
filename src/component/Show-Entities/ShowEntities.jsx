import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import "./style.scss"

export default function ShowEntities() {
  const [age, setAge] = React.useState('25');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  

  return (
    <Box width="100%" borderColor="#aaafb5">
          <FormControl fullWidth={true} sx={{mt:"2px", border:"1px solid #aaafb5", borderRadius:"4px"}} >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
  sx={{p: 0, '& .MuiOutlinedInput-input': {p: "7px 10px", color:"#aaafb5"}}}
        >
          <MenuItem value={25} >
            25
          </MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={5000}>5000</MenuItem>
        
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </Box>
  );
}

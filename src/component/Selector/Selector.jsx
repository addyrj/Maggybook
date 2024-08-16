import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import "./style.scss"

export default function Selector() {
  const [age, setAge] = React.useState('');

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
          <MenuItem value="" >
            ALL
          </MenuItem>
          <MenuItem value={"Desposite/Withdrawal Report"}>Desposite/Withdrawal Report</MenuItem>
          <MenuItem value={"Game Report"}>Game Report</MenuItem>
        
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </Box>
  );
}

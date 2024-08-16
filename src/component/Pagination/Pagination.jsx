import React from 'react'
import "./style.scss"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Pagination = () => {
  return (
    <>
    <ul className='pagination'>
<li><KeyboardDoubleArrowLeftIcon /></li>
<li><KeyboardArrowLeftIcon/></li>
<li><span>1</span></li>
<li><KeyboardArrowRightIcon/></li>
<li><KeyboardDoubleArrowRightIcon/></li>
    </ul>
    </>
  )
}

export default Pagination
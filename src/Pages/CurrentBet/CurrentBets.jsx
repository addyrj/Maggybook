import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShowEntities from '../../component/Show-Entities/ShowEntities';
import { useState } from 'react';
import Footer from "../../layout/footer/Footer";

import "./style.scss"
import Pagination from '../../component/Pagination/Pagination';
import Marquee from '../../layout/subnav/marquee/Marquee';
const CurrentBets = () => {

  // const CustomRadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedback, setSelectedBack] = useState('');
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleChangeback = (events) => {
      setSelectedBack(events);
    };

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
  <>
   <div className='Current-bets'>
    <Marquee/>
     <div className="detailSearch">
        <p>Current Bets</p>
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchIcon/>
        </div>
      </div>
    
    <div className="sports-Casino">
      {['Sport', 'Casino'].map((text, index) => (
        <p
          key={index}
          onClick={() => handleClick(index)}
          style={{
            borderBottom: activeIndex === index ? '2px solid #aaafb5' : 'none',
            cursor: 'pointer' // Optional: changes cursor to pointer to indicate clickable element
          }}
        >
          {text}
        </p>
      ))}
    </div>
 <div className='matched-deleted'>
  <div className="matched">
        <input
          type="radio"
          value="Matched"
          checked={selectedOption === 'Matched'}
          onChange={handleChange}
          style={{
            appearance: 'none',
            backgroundColor: selectedOption === 'Matched' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}
          className='input-checked'
        />
        <span>
        Matched
        </span>
        </div>
      {/* </label> */}
      {/* <label style={{ display: 'block', marginBottom: '10px' }}> */}
      <div className="matched">
        <input
          type="radio"
          value="Deleted"
          checked={selectedOption === 'Deleted'}
          onChange={handleChange}
          style={{
            appearance: 'none',
            backgroundColor: selectedOption === 'Deleted' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}
           className='input-checked'
        />
        <span>

        Deleted
        </span>
        </div>
    </div>

    <div className="entriesAllsec">
      
      <div className="entries-sec">
        <p>Show</p>
        <ShowEntities/>
        <p>Enteries</p>
      </div>
      <div className='matched-deleted'>
  <div className="matched">
  <input type="radio" id="All" name="fav_language" value="All" className='input-checked'
  onChange={()=>handleChangeback("All")}
  style={{
            appearance: 'none',
            backgroundColor: selectedback === 'All' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}/>
<label>All</label>

 <input type="radio" id="Back" name="fav_language" value="Back" className='input-checked' 
  onChange={()=>handleChangeback("Back")}
style={{
            appearance: 'none',
            backgroundColor: selectedback === 'Back' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}/>
<label>Back</label>
{/* <br/> */}
 <input type="radio" id="Lay" name="fav_language" value="Lay"
  onChange={()=>handleChangeback("Lay")}
className='input-checked' style={{
            appearance: 'none',
            backgroundColor: selectedback === 'Lay' ? 'black' : '#3C444B',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '10px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '1px solid #aaafb5'
          }}/>
 <label>Lay</label>
    </div>
    </div>
    <div className="totalBetaAmount">
      <p>
      Total Bets: <span>0</span></p>
      <p>Total Amount: <span>0</span></p>
    </div>
    </div>

    <div className="accountStatementTable">
    <table className='Statement'> 
      <thead>
  <tr>
    <th >Sports</th>
    <th>Event name</th>
    <th>market name</th>
    <th>nation</th>
    <th>user rate</th>
    <th>price value</th>
    <th>amount</th>
    <th>place date</th>
    <th>Action</th>
  
  </tr>
  </thead>
  <tbody>
    {[1,2,3,4,5,6,7,8,9,10,11,12].map((itm)=>{
      return(

    <tr key={itm}>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>Mexico</td>
    </tr>
      )
    })}
   
  </tbody>
</table>


      </div>







      </div>
<div className="footer">
  <Footer/>
</div>
  </>
  )
}

export default CurrentBets
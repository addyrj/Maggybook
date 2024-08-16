import React from 'react'
import Footer from '../../layout/footer/Footer'
import SearchIcon from '@mui/icons-material/Search';
import "./style.scss"
import ResponsiveDatePickers from '../../component/date-picker/ResponsiveDatePickers';
import Selector from '../../component/Selector/Selector';
import ShowEntities from '../../component/Show-Entities/ShowEntities';
import Pagination from '../../component/Pagination/Pagination';
import Marquee from '../../layout/subnav/marquee/Marquee';


const AccountStatement = () => {
  const stylesCss = {
    tableHeader:{
      position: "sticky", 
      top: 0,
       backgroundColor: "white", 
       zIndex: 1,
    },
    table:{
      display: "block", 
      height: 200,
      overflowY:"scroll"
    }
  }
  return (
    <>
    <div className='AccountStatement'>
      <Marquee/>
      <div className="detailSearch">
        <p>Account Statement</p>
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchIcon/>
        </div>
      </div>
      <div className="filter-month">
    <div className="selectdate">
      <div className="month">
        <p>From</p>
    <ResponsiveDatePickers/>
      </div>
      <div className="month">
        <p>To</p>
    <ResponsiveDatePickers/>
      </div>

    {/* <ResponsiveDatePickers/> */}
    </div>
    <div className="list-submit">

    <div className="list-selector">
      <p>Type</p>
     
<Selector/>
    </div>
<div className="submit-btn">
  <button>Submit</button>
</div>

    </div>
      </div>

      <div className="show-Entries">
        <p>Show</p>
        <ShowEntities/>
        <p>Entries</p>
      </div>

      <div className="accountStatementTable">
    <table className='Statement'> 
      <thead>
  <tr>
    <th >Date</th>
    <th>Sr no</th>
    <th>Credit</th>
    <th>Debit</th>
    <th>Pts</th>
    <th>Remark</th>
  
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
    </tr>
      )
    })}
   
  </tbody>
</table>


      </div>
<div className="pagination-sec">

<Pagination/>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default AccountStatement
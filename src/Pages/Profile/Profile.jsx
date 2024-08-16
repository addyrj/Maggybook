import React from 'react'
import Footer from '../../layout/footer/Footer'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./style.scss"

const Profile = () => {
  return (
    <section className="profile">

    <div className='profile-detail'>
<div className="profile-img">
  <span>

<AccountCircleIcon/>
  </span>
  {/* <img src="" alt="Profile-image" /> */}
<h1>demon</h1>  
</div>


<div className="user">

<div className="user-detail">
  <p>User Name :</p>
  <p> Pawan</p>
</div>
<div className="user-detail">
  <p>Date of Joining :
  </p>
  <p> 2024-07-29 10:31:47</p>
</div>
<div className="user-detail">
  <p>User ID :</p>
  <p> dattey3061</p>
</div>
<div className="user-detail">
  <p>Mobile No :</p>
  <p> </p>
</div>
<div className="user-detail">
  <p>City :</p>
  <p> </p>
</div>
<div className="user-detail">
  <p>Available Balance :
  </p>
  <p>00.00</p>
</div>
<div className="user-detail">
  <p>Win :</p>
  <p> 0.00</p>
</div>
<div className="user-detail">
  <p>Exposure :</p>
  <p></p>
</div>
<div className="user-detail">
  <p>Total Balance :</p>
  <p> 0</p>
</div>
</div>




    </div>
    <Footer/>
    </section>
  )
}

export default Profile
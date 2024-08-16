
import Sider from '../../layout/sider';
import Navbar from '../../layout/navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../../layout/footer/Footer"
////styles
import "./styles.scss"
import { useEffect, useState } from 'react';
import SubNavTwo from '../../layout/subnavtwo/SubNavTwo';
import { SubNav } from '../../layout/subnav/SubNav';
import { useMediaQuery } from '@mui/material';
export let siderHandlerRef;
const MainLayout = () => {
  const [activeSider, setActiveSider] = useState(false)

  const siderOpenHandler = ()=>{
    console.log("first")
    setActiveSider(!activeSider)
  }
siderHandlerRef = siderOpenHandler
const {pathname} = useLocation()
const locationArray = ["/Live-Casino","/AccountStatement","/CurrentBets","/ActivityLog","/Slots","/FantasyGame","/Lottery"]
const checkLocation = locationArray.includes(pathname)
useEffect(() => {
  if(activeSider){
    document.body.style.overflow = 'hidden';
  }else{
    // document.body.style.overflowY = 'scroll';

  }
}, [activeSider])

const [isLogin, setIsLogin] = useState(true)
const isMobile = useMediaQuery("(max-width:780px)")
const width = isMobile?"100%":checkLocation?"100%":"100%"
console.log(width)
  return (
    <div className='main-layout'>
    {!isMobile && 
      <div className="layout-nav-col">
        <Navbar />
      </div>
        }
      <div className={`main-layout-col mt-[.3125rem] mr-[.3125rem] w-[${!checkLocation?"80%":"100%"}]`}>
{!checkLocation  &&
      <div className={`${activeSider?"main-layout-sider-active":"main-layout-sider"}`} onClick={()=>setActiveSider(false)}>
      {/* {activeSider &&  */}

       <Sider/>
      {/* }  */}
      </div>
}
      <div className={`main-layout-content `} style={{width:width}}>
        
        {isLogin? <SubNav/>:
      <SubNavTwo />
        }
      <Outlet />
      </div>
      </div>
      {/* <Footer /> */}
      </div>
  )
}

export default MainLayout
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from "../../Pages/login/Login";
import "./styled.scss";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const nav = useNavigate();
  const token = localStorage.getItem('token');
  
  const navArray = [{
    name:"Lottery",
    url:token?"":"/Lottery"
  

  },
  {
    name:"SportsBook1",
    url:"/cuming"

  },
  {
    name:"Exchange",
   
    url:token?"":"/"

  },
  {
    name:"Live Casino",
    
    url:token?"":"/Live-Casino"

  },
  {
    name:"Slots",
    url:token?"":"/Slots"

  },
  {
    name:"Fantasy Game",
    url:token?"":"/FantasyGame"

  },
];

  const handleTabClick = (url) => {
    if(url || url == "/"){
      nav(url)
    }
    else{
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div className='nav-main'>
      <ul className='menu-list'>
        {navArray.map((item, i) => (
          // <Link to={""} key={item}>
          <li key={item?.name+i} className={i === activeTab ? 'active' : ''} onClick={() => handleTabClick(item?.url)}>
              {item?.name}
            </li>
          // </Link>
        ))}
      </ul>
    </div>
      <Login isOpen={isModalOpen} onClose={closeModal} />
        </>
  );
};

export default Navbar;

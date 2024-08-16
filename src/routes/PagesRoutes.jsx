import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout/index.jsx"
import Home from "../Pages/home/Home.jsx";
import { home } from "./PagesUrl.jsx";
import SportsDetails from "../Pages/sportsdetails/SportsDetails.jsx";
import Cuming from "../Pages/cuming/Cuming.jsx";
import LiveCasino from "../Pages/Live-casino/LiveCasino.jsx";
import FantasyGame from "../Pages/FantascyGame/FantasyGame.jsx";
import Slots from "../Pages/Slots/Slots.jsx";
import Lottery from "../Pages/Lottery/Lottery.jsx";
import Profile from "../Pages/Profile/Profile.jsx";
import AccountStatement from "../Pages/AccountStatement/AccountStatement.jsx";
import CurrentBets from "../Pages/CurrentBet/CurrentBets.jsx";
import ActivityLog from "../Pages/ActivityLog/ActivityLog.jsx";
import SetButtonValue from "../Pages/SetButtonValue/SetButtonValue.jsx";
import ChangePassword from "../Pages/ChangePassword/ChangePassword.jsx";
import Auth from "../Pages/authSecure/Auth.jsx";




export const router = createBrowserRouter([
    {
      path: home,
      element: <MainLayout/>,
      children: [
        {
          path: home,
          element: <Home/>,
        },
        {
          path: "/sports/details",
          element: <SportsDetails />,

        },
        {
          path: "/cuming",
          element: <Cuming />,

        },
        {
          path: "/Live-Casino",
          element: <LiveCasino />,

        },
        {
          path: "/Slots",
          element: <Slots />,

        },
        {
          path: "/FantasyGame",
          element: <FantasyGame />,

        },
        {
          path: "/Lottery",
          element: <Lottery />,

        },
        {
          path: "/Profile",
          element: <Profile />,

        },
        {
          path: "/AccountStatement",
          element: <AccountStatement />,

        },
        {
          path: "/CurrentBets",
          element: <CurrentBets />,

        },
        {
          path: "/ActivityLog",
          element: <ActivityLog />,

        },
        {
          path: "/SetButtonValue",
          element: <SetButtonValue />,

        },
        {
          path: "/ChangePassword",
          element: <ChangePassword />,

        },
        {
          path: "/auth",
          element: <Auth />,

        },
        
      
   
      ],
    },
   
  ]);
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './private/PrivateRoutes';
import NavBar from './components/NavBar';
import Auth from './Views/Auth';
import Home from './Views/Home';
import Piece from './components/Piece';
import PieceGsm from "./components/pieceGsm";
import PiecePC from "./components/PiecePC";
import Repair from "./components/repair";
import AppsAndPro from './components/AppsAndPro.jsx';
import AddP from './components/AddP';
import AddV from './components/AddV';
import AddAP from './components/AddAP';
import DashboardV from './components/DashboardV';
import DashboardP from './components/DashboardP';
import DashboardAppsAndPro from './components/DashboardAppsAndPro';
import DashboardAdmin from './Views/DashboardAdmin';
import VideoGsm from './components/VideoGSM';
import VideoPC from './components/VideoPC';
import Android from './components/Android';
import Windows from './components/Windows';
import AddPPC from './components/AddPPC';
import AddVPc from './components/AddVPc';
import DashboardVPc from './components/DashboardVPc';
import DetailsP from './components/DetailsP';
import DetailsPPc from './components/DetailsPPc';
import DetailsAPP from './components/DetailsAPP';
import AddPro from './components/AddPro';
import DashboardPro from './components/DashboardPro';
import DetailsPro from './components/DetailsPro';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .get('http://localhost:8000/api/user', config)
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log('*** ==> ', err));
  }, [refresh]);

  const refresher = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Piece" element={<Piece />} />
          <Route path="/pieceGsm" element={<PieceGsm />} />
          <Route path="/PiecePC" element={<PiecePC />} />
          <Route path="/Repair" element={<Repair />} />
          <Route path="/AppsAndPro" element={<AppsAndPro/>}/>
          <Route path="/AddProduct" element={<AddP/>}/>
          <Route path="/addAppsOrPro" element={<AddAP/>}/>
          <Route path="/addVideo" element={<AddV/>}/>
          <Route path="/DashboardP" element={<DashboardP/>}/>
          <Route path="/DashboardV" element={<DashboardV/>}/>
          <Route path="/DashboardAppsAndPro" element={<DashboardAppsAndPro/>}/>
          <Route path="/DashboardAdmin" element={<DashboardAdmin/>}/>
          <Route path="/RepairGSM" element={<VideoGsm/>}/>
          <Route path="/RepairPC" element={<VideoPC/>}/>
          <Route path="/Android" element={<Android/>}/>
          <Route path="/Windows" element={<Windows/>}/>
          <Route path="/AddPPC" element={<AddPPC/>}/>
          <Route path="/AddVPc" element={<AddVPc/>}/>
          <Route path="/DashboardVPc" element={<DashboardVPc/>}/>
          <Route path="/DetailsP/:AddProduct_id" element={<DetailsP/>}/>
          <Route path="/DetailsPPc/:AddProductPPC_id" element={<DetailsPPc/>}/>
          <Route path="/DetailsAPP/:Android_id" element={<DetailsAPP/>}/>
          <Route path="/DetailsPro/:Windows_id" element={<DetailsPro/>}/>
          <Route path="/AddPro" element={<AddPro/>}/>
          <Route path="/DashboardPro" element={<DashboardPro/>}/>








          <Route
            path="/Home"
            element={
              <PrivateRoute>
                <Home
                  currentUser={currentUser}
                  isLoading={isLoading}
                  refresh={refresh}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

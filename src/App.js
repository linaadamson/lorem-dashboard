// STYLES
import "./App.css";

// IMPORTS
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

// PAGES AND COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Projects from "./pages/projects/Projects";
import CreateProject from "./pages/projects/create/CreateProject"
import SurveyPreview from "./pages/projects/preview/SurveyPreview";

function App() {
  const [isShowing, setIsShowing] = useState(false)

  const handleClick = () => {
    setIsShowing(isShowing ? false : true);
  }
  return (
    <div  className={isShowing ? 'App isShowing' : 'App'}>
      <BrowserRouter>
        <Navbar handleClick={handleClick} />

        <div className="container">
          <Sidebar isShowing = {isShowing} handleClick={handleClick} />


          <Routes>
          <Route  path="/projects" element={<Projects/>} />
          <Route  path="/projects/create" element={<CreateProject/>} />
          <Route  path="/projects/preview" element={<SurveyPreview/>} />
          <Route  path="*" element = {<Navigate to = '/projects'/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

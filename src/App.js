import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataList from "./page/DataList";
import Project from "./page/Project";
import NotFound from "./page/NotFound";
import ProjectDetail from "./page/ProjectDetail";
import Home from "./page/Home"
import './style/app.scss'
import DetailDesign from "./page/DetailDesign";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <DataList/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/data/:data" element={<Project/>}></Route>
    <Route path="/data/:data/:title" element={<ProjectDetail/>}></Route>
    <Route path="/data/:Design/:title" element={<DetailDesign/>}></Route>
    <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


import { HashRouter as Router, Routes, Route, } from "react-router-dom";

import { Stack } from "@chakra-ui/layout";

import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Project from "./components/Project/project";



//TODO: Potentially create page for skills instead of just a link to google drive

function App() {
   

  return (
    <Router>
      <Stack p={5}>
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/portfolio" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
       
        <Footer></Footer>
      </Stack>
    
    </Router>
  );
}

export default App;
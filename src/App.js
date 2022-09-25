
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import { VStack } from "@chakra-ui/layout";

import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Project from "./components/Project/project";


//TODO: Potentially create page for resume instead of just link to google drive
//TODO: Get NPM packages from fontawesome for language icons
function App() {
   

  return (
    <Router>
      <VStack p={5}>
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/portfolio" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        <Footer></Footer>
        
      </VStack>
    
    </Router>
  );
}

export default App;
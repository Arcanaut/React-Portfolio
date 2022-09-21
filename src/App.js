
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack } from "@chakra-ui/layout";

import Header from "./components/Header/header";
import About from "./components/About/about";
import Nav from "./components/Nav/nav";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
// import About from "./About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";



//TODO: Get NPM packages from fontawesome for language icons
function App() {
   

  return (
    <Router>
      <VStack p={5}>
       <Nav></Nav>
       <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        
        {/* <Portfolio></Portfolio>
        <Contact></Contact> */}
      </VStack>
        {/* <Switch>
      <Route path="/"/>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      </Switch> */}
    </Router>
  );
}

export default App;
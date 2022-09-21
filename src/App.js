
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack } from "@chakra-ui/layout";

import Header from "./components/Header/header";
import About from "./components/About/about";
import Nav from "./components/Nav/nav";
// import About from "./About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";


// TODO: potentially move Nav for PWA in to App.js instead of own component
//TODO: Get NPM packages from fontawesome for language icons
function App() {
   

  return (
    <Router>
      <VStack p={5}>
       <Nav></Nav>
       <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/about" element={<About/>}></Route>
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
      <About></About>
    </Router>
  );
}

export default App;
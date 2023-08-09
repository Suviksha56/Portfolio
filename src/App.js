
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Homes } from './component/Home/Homes';
import { About } from './component/About/About';
import { Myblog } from './component/Blog/Myblog';
import { Resume } from './component/Resume/Resume';
import { Contact } from './component/Contact/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter basename='Portfolio'>
        <Routes>
          <Route path="/" index element={<Homes />}></Route>
          <Route path="/about" index element={<About />}></Route>
          <Route path="/blog" index element={<Myblog />}></Route>
          <Route path="/resume" index element={<Resume />}></Route>
          <Route path="/contact" index element={<Contact />}></Route>


        </Routes>
      </BrowserRouter>
      {/* <Homes></Homes> */}
      {/* <About></About> */}
      {/* <Myblog></Myblog> */}
      {/* <Resume></Resume> */}
      {/* <Contact></Contact> */}


    </div>
  );
}

export default App;

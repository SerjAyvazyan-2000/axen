import { Route, Routes,useLocation } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Affiliate from "./pages/affiliate/affiliate.js";
import { useEffect } from "react";

function App() {

    const location = useLocation();


    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'auto';
    }, []);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [location]);



  return (
    <div className="wrapper G-flex-column">
    
      <Header/>
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
          <Routes>
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
      </main>
      <Footer/>

      <div className="site-decor G-flex">
        <img src="/siteDecor.png" alt="" />
      </div>
    </div>
  );
}

export default App;

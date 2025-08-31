import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className="wrapper G-flex-column">
      <Header/>
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
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

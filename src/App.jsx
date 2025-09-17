import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./WEBSITE/pages/home/home.jsx";
import Header from "./WEBSITE/components/header/header.jsx";
import Footer from "./WEBSITE/components/footer/footer.jsx";
import { useEffect } from "react";
import SiginUp from "./ADMIN/pages/authorization/sigin-up.jsx";
import SiginIn from "./ADMIN/pages/authorization/sigin-in.jsx";
import Authentication from "./ADMIN/pages/authorization/authentication.jsx";
import CodeAuthentication from "./ADMIN/pages/authorization/code-authentication.jsx";
import AdminHome from "./ADMIN/pages/adminHome/admin-home.jsx";
import Sidebar from "./ADMIN/components/sidebar/sidebar.jsx";
import Merchant from "./ADMIN/pages/merchant/merchant.jsx";
import Affiliate from "./WEBSITE/pages/affiliate/affiliate.jsx";
import SiteConnect from "./ADMIN/pages/merchant/site-connect.jsx";
import Confirm from "./ADMIN/pages/merchant/confirm.jsx";
import Finish from "./ADMIN/pages/merchant/finish.jsx";
import ConnectedSite from "./ADMIN/pages/merchant/conectedSite.jsx";
import Statistics from "./ADMIN/pages/statistics/statistics.jsx";
import Refferal from "./ADMIN/pages/refferal/refferal.jsx";
import History from "./ADMIN/pages/history/history.jsx";
import Profile from "./ADMIN/pages/profile/profile.jsx";
import Conclusion from "./ADMIN/pages/conclusion/conclusion.jsx";
import ConclusionStatus from "./ADMIN/pages/c-status/c-status.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Integration from "./ADMIN/pages/integration/integration.jsx";
import Exchange from "./WEBSITE/pages/exchange/exchange.jsx";

function App() {
  const location = useLocation();
  const isAuth = Boolean(localStorage.getItem("user"));


  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  const routeConfig = [
    { path: "*", element: <Home /> },
    { path: "/", element: <Home /> },
    { path: "/affiliate", element: <Affiliate /> },
    { path: "/exchange", element: <Exchange /> ,hidenAuthentication:true },

    { path: "/signUp", element: <SiginUp />, hideHeader: true },
    { path: "/sigIn", element: <SiginIn />, hideHeader: true },
    { path: "/authentication", element: <Authentication />, hideHeader: true },
    {
      path: "/codeAuthentication",
      element: <CodeAuthentication />,
      hideHeader: true,
    },

    {
      path: "/adminHome",
      element: <AdminHome />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/merchant",
      element: <Merchant />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/siteConnect",
      element: <SiteConnect />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/confirm",
      element: <Confirm />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/finish",
      element: <Finish />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/connectedSite",
      element: <ConnectedSite />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/statistics",
      element: <Statistics />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/refferal",
      element: <Refferal />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/history",
      element: <History />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/profile",
      element: <Profile />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/conclusion",
      element: <Conclusion />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
    {
      path: "/c-status",
      element: <ConclusionStatus />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },

        {
      path: "/integration",
      element: <Integration />,
      hideHeader: true,
      showSidebar: true,
      private: true,
    },
  ];

  const currentRoute = routeConfig.find(
    (item) => item.path === location.pathname
  );


  const hidenAuthentication = currentRoute?.hidenAuthentication || false;


  const hideHeader = currentRoute?.hideHeader || false;
  const visibleSidebar = currentRoute?.showSidebar || false;

  return (
    <div className="wrapper G-flex-column">
    
      {!hideHeader && <Header hidenAuthentication={hidenAuthentication}/>}
      <main className={visibleSidebar ? "admin-main" : ""}>
        {visibleSidebar && <Sidebar />}
        <div className={visibleSidebar ? "admin-wrapper" : ""}>
          <Routes>
            {routeConfig.map(({ path, element, private: isPrivate }) => (
              <Route
                key={path}
                path={path}
                element={
                  isPrivate ? (
                    <PrivateRoute isAuth={isAuth}>{element}</PrivateRoute>
                  ) : (
                    element
                  )
                }
              />
            ))}

          </Routes>
        </div>
      </main>
      {!hideHeader && <Footer />}

      <div className="site-decor G-flex">
        <img src="/siteDecor.png" alt="" />
      </div>
    </div>
  );
}

export default App;

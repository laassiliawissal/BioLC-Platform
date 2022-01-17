import "react-toastify/dist/ReactToastify.css";

import Login from "modules/auth/containers/Login";
import Layout from "modules/common/Layout";
import Dashboard from "modules/dashboard/containers/Dashboard";
import Home from "modules/home";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

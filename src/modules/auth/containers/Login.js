import {Helmet} from "react-helmet";

import LoginComp from "../components/Login";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Log in - Bio & Low Carbon!</title>
      </Helmet>
      <LoginComp />
    </>
  );
};

export default Login;

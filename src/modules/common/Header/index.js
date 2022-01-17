import Logo from "assets/images/png/small-logo.png";
import Menu from "assets/images/svg/menu.svg";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="flex flex-col items-start justify-between py-4 border-b border-gray-200 gap-y-2 sm:items-center sm:flex-row">
      <div className="px-6">
        <button type="button" className="hover:opacity-50">
          <img src={Menu} alt="Menu" className="w-5 h-5" />
        </button>
      </div>
      <Link to="/">
        <img src={Logo} className="mx-auto w-60" alt="BP Logo" />
      </Link>
      <div className="px-2 sm:px-6">
        {token ? (
          <button
            type="button"
            className="px-3 py-2 font-medium text-dark-lime-green hover:opacity-50"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-3 py-2 font-medium text-white rounded bg-dark-lime-green hover:opacity-50"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

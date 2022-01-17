import Logo from "assets/images/png/small-logo.png";
import Facebook from "assets/images/svg/facebook.svg";
import Instagram from "assets/images/svg/instagram.svg";
import Twitter from "assets/images/svg/twitter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col py-16 text-center gap-y-8 sm:px-32 bg-very-light-gray">
      <img src={Logo} className="mx-auto sm:mx-0 w-80" alt="BP Logo" />
      <div className="flex flex-col justify-between border-t border-gray-200 sm:flex-row gap-y-8 sm:gap-y-0">
        <p className="mt-6 text-dark-gray">
          © {currentYear} BP. All rights reserved.
        </p>
        <div className="flex items-center justify-center mt-6 gap-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
            className="hover:opacity-50"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com"
            className="hover:opacity-50"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com"
            className="hover:opacity-50"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

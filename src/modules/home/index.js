import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Bio & Low Carbon!</title>
      </Helmet>
      <main className="px-8 py-12 sm:px-32 sm:py-28">
        <h2 className="text-3xl font-semibold text-slate-900">
          Welcome to bp Bio & Low Carbon
        </h2>
        <p className="my-12 text-lg text-gray-900">
          For a personalised experience, sign in to access My Locker, your
          documents,
          <br /> continue services and so much more. Don&apos;t have an account?{" "}
          <Link
            to="/login"
            className="text-dark-lime-green hover:text-slate-300"
          >
            Register here
          </Link>
        </p>
        <div className="flex flex-col gap-y-3 sm:flex-row gap-x-5">
          <Link
            className="px-3 py-3 text-center text-white rounded sm:px-7 bg-dark-lime-green hover:opacity-50"
            to="/login"
          >
            Bp staff enter here
          </Link>
          <Link
            className="px-3 py-3 text-center bg-white border border-green-700 rounded text-slate-900 sm:px-7 hover:opacity-50"
            to="/login"
          >
            Visitors log in here
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;

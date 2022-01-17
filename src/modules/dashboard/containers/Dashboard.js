import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import UploadDocuments from "../components/UploadDocuments";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Bio & Low Carbon!</title>
      </Helmet>
      <div className="w-4/5 px-32 py-16">
        <Link to="/" className="underline text-slate-900 hover:text-slate-300">
          home
        </Link>
        <h2 className="py-6 text-3xl font-semibold text-slate-900">
          Upload documents
        </h2>
        <UploadDocuments />
      </div>
    </>
  );
};

export default Dashboard;

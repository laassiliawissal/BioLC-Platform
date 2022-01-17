import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: () =>
      Yup.object().shape({
        email: Yup.string().required("Email required"),
        password: Yup.string().required("Password required"),
      }),
    onSubmit: (values) => {
      const token = "********";
      if (values) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    },
  });

  return (
    <div className="w-full px-4 py-20 sm:px-0 sm:mx-auto sm:w-1/4">
      <h2 className="py-10 text-3xl font-semibold text-center text-slate-900">
        Log in
      </h2>
      <form className="text-left" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <label className="font-medium text-slate-900" htmlFor="email">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="yourname@bp.com"
            className="py-2 border-b outline-none text-slate-900"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div>
            {formik.touched.email && formik.errors.email && (
              <span className="absolute block text-sm text-red-600">
                {formik.errors.email}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <label className="font-medium text-slate-900" htmlFor="password">
            Password*
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className="py-2 border-b outline-none text-slate-900"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div>
            {formik.touched.password && formik.errors.password && (
              <span className="absolute block text-sm text-red-600">
                {formik.errors.password}
              </span>
            )}
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="px-8 py-3 font-medium text-white rounded-full bg-dark-lime-green hover:opacity-50"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

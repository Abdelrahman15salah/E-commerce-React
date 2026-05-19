import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import * as YUP from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { CircleLoader } from "react-spinners";
import "./Login.css";
export default function Login() {
  let [spinnerr, setspinnerr] = useState(false);
  let [, setapierror] = useState("");
  let navigate = useNavigate();

  async function handlesubmit(x) {
    setspinnerr(true);

    console.log(x);
    try {
      let req = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
          email: x.email,
          password: x.password,
        },
      );

      if (req.data.message == "success") {
        console.log("congrats");
        navigate("/Brands");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong";
      setapierror(message);
      toast.error(message);
      setspinnerr(false);
    }
  }

  let vali = YUP.object().shape({
    email: YUP.string()
      .email("must Enter a valid email")
      .required("email is required"),
    password: YUP.string().required("password must be required"),
  });

  let foooorm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: vali,

    onSubmit: handlesubmit,
  });
  return (
    <section className="login container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="card-title h3 fw-bold mb-0">Login Component</h2>
              <form onSubmit={foooorm.handleSubmit} className="d-grid gap-3">
                <div>
                  <Toaster />
                  <CircleLoader id="spinner" loading={spinnerr} />
                </div>

                <input
                  className={`form-control ${
                    foooorm.touched.email && foooorm.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  onChange={foooorm.handleChange}
                  onBlur={foooorm.handleBlur}
                  value={foooorm.values.email}
                />
                {foooorm.touched.email && foooorm.errors.email ? (
                  <div className="invalid-feedback d-block">
                    {foooorm.errors.email}
                  </div>
                ) : null}
                <input
                  className={`form-control ${
                    foooorm.touched.password && foooorm.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  onChange={foooorm.handleChange}
                  onBlur={foooorm.handleBlur}
                  value={foooorm.values.password}
                />
                {foooorm.touched.password && foooorm.errors.password ? (
                  <div className="invalid-feedback d-block">
                    {foooorm.errors.password}
                  </div>
                ) : null}

                <input
                  className="btn btn-primary"
                  type="submit"
                  value="submit"
                />
                <Link className="btn btn-success" to={"/register"}>
                  Register{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

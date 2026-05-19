import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import * as YUP from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { CircleLoader } from "react-spinners";
import "./Register.css";
import { countercontext } from "../../Context/appcontext";
export default function Register() {
  let [spinnerr, setspinnerr] = useState(false);
  let [, setapierror] = useState("");
  let navigate = useNavigate();
  let { token, setToken } = useContext(countercontext);
  async function handlesubmit(x) {
    setspinnerr(true);

    console.log(x);
    try {
      let req = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        {
          name: x.name,
          email: x.email,
          password: x.password,
          rePassword: x.rePassword,
          phone: x.phone,
        },
      );

      if (req.data.message == "success") {
        console.log("congrats");
        console.log(req.data.token);
        setToken(req.data.token);
        // console.log(token);

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
    name: YUP.string("Name must be string")
      .min(3, "name is less than 3 characters")
      .max(15, "name is more than 15 characters")
      .required("Name is required"),
    email: YUP.string()
      .email("must Enter a valid email")
      .required("email is required"),
    phone: YUP.string().required("phone is required"),
    password: YUP.string().required("password must be required"),
    rePassword: YUP.string()
      .oneOf([YUP.ref("password")], "repassword doesnot match password")
      .required("repassword must be required"),
  });

  let foooorm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: vali,
    onSubmit: handlesubmit,
  });
  return (
    <section className="register container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h2 className="card-title h3 fw-bold mb-4">Register Component</h2>

              <form onSubmit={foooorm.handleSubmit} className="d-grid gap-3">
                <div>
                  <Toaster />
                  <CircleLoader id="spinner" loading={spinnerr} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="username"
                  onChange={foooorm.handleChange}
                  onBlur={foooorm.handleBlur}
                  value={foooorm.values.name}
                />
                {foooorm.touched.name && foooorm.errors.name ? (
                  <div className="invalid-feedback d-block">
                    {foooorm.errors.name}
                  </div>
                ) : null}
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
                  className={`form-control ${
                    foooorm.touched.rePassword && foooorm.errors.rePassword
                      ? "is-invalid"
                      : ""
                  }`}
                  type="password"
                  name="rePassword"
                  placeholder="re-type password"
                  id="rePassword"
                  onChange={foooorm.handleChange}
                  onBlur={foooorm.handleBlur}
                  value={foooorm.values.rePassword}
                />
                {foooorm.touched.rePassword && foooorm.errors.rePassword ? (
                  <div className="invalid-feedback d-block">
                    {foooorm.errors.rePassword}
                  </div>
                ) : null}
                <input
                  className={`form-control ${
                    foooorm.touched.phone && foooorm.errors.phone
                      ? "is-invalid"
                      : ""
                  }`}
                  type="tel"
                  name="phone"
                  placeholder="phone"
                  id="phone"
                  onChange={foooorm.handleChange}
                  onBlur={foooorm.handleBlur}
                  value={foooorm.values.phone}
                />
                {foooorm.touched.phone && foooorm.errors.phone ? (
                  <div className="invalid-feedback d-block">
                    {foooorm.errors.phone}
                  </div>
                ) : null}
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="submit"
                />
                <Link className="btn btn-success" to={"../login"}>
                  login{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

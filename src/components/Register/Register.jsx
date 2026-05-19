import "./Register.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as YUP from "yup";
export default function Register() {
  let navigate = useNavigate();
  // function validateName(value) {
  //   if (!value || value.trim() === "") return "Name is required";
  //   if (value.trim().length < 3) return "Name must be at least 3 characters";
  //   if (!/^[A-Za-z\s'-]+$/.test(value))
  //     return "Name can only contain letters, spaces, apostrophes and hyphens";
  //   return undefined;
  // }
  // function validateEmail(value) {
  //   if (!value || value.trim() === "") return "Email is required";
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!re.test(value)) return "Enter a valid email address";
  //   return undefined;
  // }
  // //testing

  // function validatePassword(value) {
  //   if (!value) return "Password is required";
  //   if (value.length < 6) return "Password must be at least 6 characters";
  //   return undefined;
  // }

  // function validateRePassword(value, password) {
  //   if (!value) return "Please re-type your password";
  //   if (value !== password) return "Passwords do not match";
  //   return undefined;
  // }

  // function validatePhone(value) {
  //   if (!value || value.trim() === "") return "Phone is required";
  //   const digits = value.replace(/\D/g, "");
  //   if (digits.length < 10) return "Enter a valid phone number";
  //   return undefined;
  // }
  async function handlesubmit(x) {
    // console.log("test");
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
      console.log(req);
      if (req.data.message == "success") {
        console.log("congrats");
        navigate("/Brands");
      }
    } catch (err) {
      console.error(err.response ?? err);
    }
  }

  // validate with YUP
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

  // console.log(vali);

  let foooorm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: vali,

    // validate: (values) => {
    //   const errors = {};
    //   const nameError = validateName(values.name);
    //   if (nameError) errors.name = nameError;

    //   const emailError = validateEmail(values.email);
    //   if (emailError) errors.email = emailError;

    //   const passwordError = validatePassword(values.password);
    //   if (passwordError) errors.password = passwordError;

    //   const rePasswordError = validateRePassword(
    //     values.rePassword,
    //     values.password,
    //   );
    //   if (rePasswordError) errors.rePassword = rePasswordError;

    //   const phoneError = validatePhone(values.phone);
    //   if (phoneError) errors.phone = phoneError;

    //   return errors;
    // },
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

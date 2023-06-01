import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Form.css";
import Box from "@mui/material/Box";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Forms = () => {
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
  });
  const [pass, setPass] = useState(false);
  return (
    <Box
      className="outer_form"
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "50%",
        },
      }}
    >
      <div className="form_heading">
        <img src="/petals.png" alt="" />
        <Box
          sx={{
            fontSize: {
              md: "30px",
              lg: "35px",
              xl: "40px",
            },
          }}
        >
          Welcome <span> Back</span>
        </Box>
        <div className="below_text">Glad to see you, Again!</div>
      </div>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="inner_form">
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className="email"
            />
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
            <div className="pass_container">
              {" "}
              <Field
                name="password"
                placeholder="Enter your password"
                className="password"
                type={!pass ? "password" : "text"}
              />
              &nbsp;
              {!pass ? (
                <AiOutlineEye
                  onClick={() => {
                    setPass(true);
                  }}
                  size={20}
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => {
                    setPass(false);
                  }}
                  size={20}
                />
              )}
            </div>

            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
            <div className="forgot_password">Forgot Password?</div>

            <button type="submit" className="submit">
              Log In
            </button>
          </Form>
        )}
      </Formik>
      <div className="sign_up">
        Don’t an account yet? <span> Sign Up </span>{" "}
      </div>
    </Box>
  );
};

export default Forms;

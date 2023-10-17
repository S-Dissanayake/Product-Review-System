import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import registerNewUser from "../../API/UserServices/Register";
import signupImage from "../../assets/images/signup_Image.png";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isPrivacyChecked: false,
  });

  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (state.isPrivacyChecked) {
      try {
        const res = await registerNewUser(state);

        if (res === "200 OK") {
          toast("User Created Successfully");
          window.location.reload(true);
        }
      } catch (error) {
        toast(error);
      }
    } else {
      setError("Please check the privacy Policy");
    }
  };

  return (
    <div className="container div-container">
      <ToastContainer />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Product & Service Review System
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Name"
                              value={state.name}
                              onChange={(e) => {
                                setState({
                                  ...state,
                                  name: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Email"
                              onChange={(e) => {
                                setState({
                                  ...state,
                                  email: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              onChange={(e) => {
                                setState({
                                  ...state,
                                  password: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Confirm Password"
                              onChange={(e) => {
                                setState({
                                  ...state,
                                  confirmPassword: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <div>
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            onChange={(e) => {
                              setState({
                                ...state,
                                isPrivacyChecked: e.target.checked,
                              });
                            }}
                          />
                          </div>
                          
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in Terms of service
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link to={"/"} className="link">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              style={{ backgroundColor: "#0f4674" }}
                              onClick={async (e) => {
                                e.preventDefault();
                                await handleSignUp();
                              }}
                            >
                              REGISTER
                            </button>
                          </Link>
                        </div>
                        {error !== "" ? (
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                            style={{ color: "red" }}
                          >
                            {error}
                          </label>
                        ) : (
                          <></>
                        )}
                        <label className="form-check-label" htmlFor="form2Example3">
                          Already have an Account ?{" "}
                          <Link to={"/login"}>Login</Link>
                        </label>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                    style={{backgroundColor: "#0F4674", borderRadius: "15px"}}
                    >
                      <img
                        //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        src={signupImage}
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

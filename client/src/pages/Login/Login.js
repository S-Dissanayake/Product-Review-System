import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginCall from "../../API/UserServices/Login";
import signupImage from "../../assets/images/signup_Image.png";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
    try {
      const res = await loginCall(state);

      if (res === "200 OK") {
        toast("User LoggedIn Successfully");

        window.location.reload(true);
      }
    } catch (error) {
      toast(error);
    }
  };

  return (
    <div
      class="container div-container"
      style={{
        width: "100%",
      }}
    >
      <ToastContainer />
      <section
        class="vh-100"
        style={{ backgroundColor: "#eee", marginRight: "0px" }}
      >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Product & Service Review System
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
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

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
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

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link to={"/"} className="link">
                            <button
                              type="button"
                              class="btn btn-primary btn-lg"
                              style={{ backgroundColor: "#0f4674" }}
                              onClick={async (e) => {
                                e.preventDefault();
                                await handleSignUp();
                              }}
                            >
                              LOGIN
                            </button>
                          </Link>
                        </div>
                        <label class="form-check-label" htmlFor="form2Example3">
                          Do not have an Account ? <Link to={"/"}>Sign Up</Link>
                        </label>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" 
                    style={{backgroundColor: "#0F4674", borderRadius: "15px"}}
                    >
                      <img
                        //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        src={signupImage}
                        class="img-fluid"
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

export default Login;

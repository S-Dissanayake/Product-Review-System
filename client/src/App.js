/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLoader from "./components/Loader/defaultLoader";
import { useDispatch } from "react-redux";
import "./App.css";
import { getAllProducts } from "./API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setProductFetchSucceedNotification } from "./redux/actions";

const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const TopBar = React.lazy(() => import("./components/TopBar/TopBar"));
const SideBar = React.lazy(() => import("./components/SideBar/SideBar"));
const LandingGrid = React.lazy(() => import("./pages/LandingGrid/LandingGrid"));
const LandingGrid2 = React.lazy(() => import("./pages/LandingGrid/LandingGrid2"));
const Electronic = React.lazy(() => import("./pages/Electronic/Electronic"));
const Fashion = React.lazy(() => import("./pages/Fashion/Fashion"));
const Jewelry = React.lazy(() => import("./pages/Jewelry/Jewelry"));
const Bags = React.lazy(() => import("./pages/Bags/Bags"));
const Toys = React.lazy(() => import("./pages/Toys/Toys"));
const BeautyHealth = React.lazy(() =>
  import("./pages/Beauty_Health/Beauty_Health")
);
const Automobile = React.lazy(() => import("./pages/Automobile/Automobile"));
const Furniture = React.lazy(() => import("./pages/Furniture/Furniture"));
const ViewReviews = React.lazy(() => import("./pages/ViewReviews/ViewReviews"));
const SimilarReviews = React.lazy(() =>
  import("./pages/SimilarReviews/SimilarReviews")
);
const NewReview = React.lazy(() => import("./pages/NewReview/NewReview"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const EditProfile = React.lazy(() => import("./pages/EditProfile/EditProfile"));
const Banking = React.lazy(() => import("./pages/Banking/Banking"));


const userType = localStorage.getItem("userType");
const userToken = localStorage.getItem("userToken");

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const updateReduxStore = async () => {
    try {
      const fetchProducts = await getAllProducts(dispatch);
      dispatch(setProductFetchSucceedNotification());
      toast.success(fetchProducts.toUpperCase());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userType === "null" && userToken === "null") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    updateReduxStore();
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <Router>
          <TopBar />
          <ToastContainer />
          <div className="app-container">
            <SideBar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <LandingGrid />
                  </Suspense>
                }
              >
                <Route
                  exact
                  path="/electronic"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Electronic />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/fashion"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Fashion />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/jewelry"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Jewelry />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/bags-shoes"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Bags />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/toys"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Toys />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/beauty-health"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <BeautyHealth />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/automobile"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Automobile />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/furniture"
                  element={
                    <Suspense fallback={<DefaultLoader />}>
                      <Furniture />
                    </Suspense>
                  }
                />
              </Route>

              <Route
                exact
                path="/services"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <LandingGrid2 />
                  </Suspense>
                }
              >
                <Route
                  exact
                  path="/services/banking"
                  element={
                  <Suspense fallback={<DefaultLoader />}>
                    <Banking />
                  </Suspense>
                  }
                />
              </Route>

              <Route
                exact
                path="/:id"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <ViewReviews />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/similar-reviews"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <SimilarReviews />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/login"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <LandingGrid />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/products"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <LandingGrid />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/services"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <LandingGrid />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <Profile />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/edit-profile"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <EditProfile />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/new-review"
                element={
                  <Suspense fallback={<DefaultLoader />}>
                    <NewReview />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<DefaultLoader />}>
                  <SignUp />
                </Suspense>
              }
            />
            <Route
              path="login"
              element={
                <Suspense fallback={<DefaultLoader />}>
                  <Login />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
